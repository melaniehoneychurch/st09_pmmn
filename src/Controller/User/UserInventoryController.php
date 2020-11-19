<?php


namespace App\Controller\User;

use App\Entity\Inventory;
use App\Entity\Mix;
use App\Form\InventoryType;
use App\Entity\InventorySearch;
use App\Form\InventorySearchType;
use App\Repository\InventoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;


class UserInventoryController extends AbstractController
{
    /**
     * @var InventoryRepository
     */
    private $inventoryRep;
    /**
     * @var EntityManagerInterface
     */
    private $em;
    /**
     * @var Security
     */
    private $security;

    /**
     *
     * @param InventoryRepository $inventoryRep
     * @param EntityManagerInterface $em
     * @param Security $security
     */

    public function __construct(InventoryRepository $inventoryRep, EntityManagerInterface $em, Security $security)
    {
        $this->inventoryRep = $inventoryRep;
        $this->em = $em;
        $this->security = $security;
    }

    /**
     * Display the inventory list
     *
     * @Route("/inventory", name="inventory.index")
     *
     * @param PaginatorInterface $paginatorInterface
     * @param Request $request
     * @return HttpFoundationResponse
     */
    public function index(PaginatorInterface $paginatorInterface, Request $request):HttpFoundationResponse
    {
        // generate a search form
        $search = new InventorySearch();
        $form = $this->createForm(InventorySearchType::class, $search);
        $form->handleRequest($request);

        // generate a paging interface
        $inventories = $paginatorInterface->paginate(
            $this->inventoryRep->findSearchedQuery($search),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('inventory/index.html.twig', [
            'inventories' => $inventories, // inventories list
            'form' => $form->createView(), // generate form
        ]);
    }

    /**
     * Display the mix inventory list
     *
     * @Route("/inventory/mix", name="inventory.mix")
     *
     * @param PaginatorInterface $paginatorInterface
     * @param Request $request
     * @return HttpFoundationResponse
     */
    public function mix(PaginatorInterface $paginatorInterface, Request $request)
    {
         // generate a paging interface
        $inventories = $paginatorInterface->paginate(
            $this->inventoryRep->findByOwner($this->getUser()),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('inventory/mix.html.twig', [
            'inventories' => $inventories, // inventories list
        ]);
    }


    /**
     * Display creation form
     *
     * @Route("/inventory/create", name="inventory.new")
     *
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function new(Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a creation form
        $inventory = new Inventory();
        $form = $this->createForm(InventoryType::class, $inventory);
            $form->handleRequest($request);

            // analyse the form response and if the form is valid them the object is created
            if ($form->isSubmitted() && $form->isValid()) {
                    if ($inventory->getProduct()){
                        $inventory->setQrCode('P'.$inventory->getProduct()->getId());
                    }
                    elseif ($inventory->getMix()){
                        $inventory->setQrCode('M'.$inventory->getMix()->getId());
                    }
                $this->em->persist($inventory);
                $this->em->flush();
                $this->addFlash('success', "Produit ajouté à l'inventaire avec succès");
                return $this->redirectToRoute('inventory.index');
            }

        return $this->render('inventory/new.html.twig', [
            'inventory' => $inventory, // empty object
            'inventory_form' => $form->createView() // creation form
        ]);
    }

    /**
     * Delete option
     *
     * @Route("/inventory/{id}", name="inventory.delete", methods="DELETE")
     *
     * @param Inventory $inventory
     * @param Request $request
     * @return
     */
    public function delete(Inventory $inventory, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // analyse the csrf token and if it is valid them the object is deleted
        if ($this->isCsrfTokenValid('delete' . $inventory->getId(), $request->get('_token'))) {
            $this->em->remove($inventory);
            $this->em->flush();
            $this->addFlash('success', "Produit supprimé de l'inventaire avec succès");
        }
        return $this->redirectToRoute('inventory.index');
    }

    /**
     * Export CSV
     *
     * @Route ("/inventory/mix", name="inventory.export")
     *
     * @return StreamedResponse
     */
    public function exportCSV()
    {

        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $inventories = $this->inventoryRep->findAll();

        $fileName = 'export_inventory'.date('d_m_Y').".csv";
        $response = new StreamedResponse();

        $response->setCallback(function () use ($inventories){
            $handle = fopen('php://memory', 'w+');

            //Nom des colonnes csv
            fputcsv($handle, array('Nom',
                'Propriétaire',
                'Dosage',
                'Quantité'
                ), ';');

            //Champs
            foreach ($inventories as $index => $inventory)
            {
                fputcsv($handle, array(
                    $inventory->getTitle(),
                    $inventory->getOwner(),
                    $inventory->getDosage(),
                    $inventory->getQuantity()
                ),';');
            }
            fclose($handle);
        });


        $response->setStatusCode(200);
        $response->headers->set('Content-Type', 'text/csv; charset=utf-8', 'application/force-download');
        $response->headers->set('Content-Disposition','attachment; filename='.$fileName);

        //$response->send();

        /*    $response->headers->set('Content-Type', 'text/csv');
            $response->headers->set('Content-Disposition', 'attachment; filename="export_from_doctrine_demo.csv"');
            $response->send(); */

        //return $this->redirectToRoute('mix.index');
        $this->addFlash('success', "Inventaire exporté");
        return $response;
        //return $this->redirectToRoute('inventory.index');

    }


    /**
     * Export CSV
     *
     * @Route ("/inventory", name="inventory.exporting")
     *
     * @return
     */
    public function exportInvent()
    {

        $filename = 'inventory.csv';
        $inventories = $this->inventoryRep->findAll();
        $header = 'Titre - Value';
        $header_ar = explode(', ', $header);

        // file creation
        $file = fopen($filename,"w");
        fputcsv($file,$header_ar);
        foreach($inventories as $inventory){
            $array = (array) $inventory->getTitle();
            fputcsv($file,$array);
        }

        fclose($file);

        // download
        header("Content-Description: File Transfer");
        header("Content-Disposition: attachment; filename=".$filename);
        header("Content-Type: application/csv; ");

        readfile($filename);

        // deleting file
        unlink($filename);
        exit();
    }




}