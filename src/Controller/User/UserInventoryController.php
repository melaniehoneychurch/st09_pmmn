<?php


namespace App\Controller\User;

use App\Entity\Inventory;
use App\Entity\Mix;
use App\Entity\RiskOfUse;
use App\Form\InventoryType;
use App\Entity\InventorySearch;
use App\Form\InventorySearchType;
use App\Form\MixType;
use App\Repository\InventoryRepository;
use App\Repository\RiskOfUseRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;


/**
 * Class UserInventoryController
 * @package App\Controller\User
 */
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
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

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
     * Display the inventory list
     *
     * @Route("/inventory/export", name="inventory.export")
     *
     * @param PaginatorInterface $paginatorInterface
     * @param Request $request
     * @return HttpFoundationResponse
     */
    public function export(PaginatorInterface $paginatorInterface, Request $request):HttpFoundationResponse
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a search form
        $search = new InventorySearch();
        $form = $this->createForm(InventorySearchType::class, $search);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->exportCSV($paginatorInterface->paginate(
                $this->inventoryRep->findSearchedQuery($search),
                $request->query->getInt('page', 1),
                10
            ));
            return $this->redirectToRoute('inventory.index');
        }


        return $this->render('inventory/export.html.twig', [
            'form' => $form->createView(), // generate form
        ]);
    }


    /**
     *
     * @param $inventories
     * @return void
     */
    public function exportCSV($inventories){
        $filename = 'export_inventory_'.date('d_m_Y').".csv";

        //$inventories = $this->inventoryRep->findAll();

        // file creation
        $file = fopen($filename,"w");
        fputs($file, $bom =( chr(0xEF) . chr(0xBB) . chr(0xBF) ));
        fputcsv($file, array('Nom',
            'Propriétaire',
            'Concentration/pureté',
            'Quantité',
            'Stockage'
        ), ';');

        foreach($inventories as $inventory){
            fputcsv($file,array(
                $inventory->getTitle(),
                $inventory->getOwner()->getIdentity(),
                $inventory->getDosage(),
                $inventory->getQuantity(),
                $inventory->getStorage()->getName()
            ),';');
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


    /**
     * Display the mix inventory list
     *
     * @Route("/mix/mymixes", name="inventory.mix")
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
                        $inventory->setTitle($inventory->getProduct()->getFrenchName());
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
     * Diplay the edit mix form
     *
     * @Route ("/mix/edit/{id}", name="inventory.edit", methods="GET|POST")
     *
     * @param Inventory $inventory
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function edit (Inventory $inventory, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        //Find the matching mix
        $mix = $inventory->getMix();

        // generate a form to modify information
        $form = $this->createForm(MixType::class, $mix);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid then informations are updated
        if ($form->isSubmitted() && $form->isValid()) {
            $mix->setUpdatedAt(new \Datetime());
            $this->em->persist($mix);
            $this->em->flush();
            $this->addFlash('success', 'Solution modifiée avec succès');

            //Update dans l'inventaire
            $this->updateInvent($inventory, $mix);

            return $this->redirectToRoute('inventory.mix');
        }

        return $this->render('mix/edit.html.twig', [
            'mix' => $mix, // targeted object
            'form' => $form->createView(), // edit form
        ]);
    }

    public function updateInvent(Inventory $invent, Mix $mix){
        if ($mix->getConfidentiality()){
            $invent->setTitle('Solution confidentielle');
        }
        else $invent->setTitle($mix->getTitle());
        if ($mix->getQuantity()){
            $invent->setQuantity($mix->getQuantity());
        }
        $invent->setMix($mix);
        $invent->setOwner($mix->getCreator());
        $invent->setStorage($mix->getStorage());
        $invent->setUpdatedAt(new \Datetime());

        $this->em->persist($invent);
        $this->em->flush();
    }

    /**
     * Preview a product after scan
     *
     * @Route("/scan/{qrcode}", name="inventory.preview")
     *
     * @param Request $request
     * @return Response
     */
    public function preview(Request $request):Response
    {
        $inventory = $this->inventoryRep->findOneBy([
            'qr_code' => $request->get('qrcode')
        ]);
        return $this->render('pages/preview.html.twig',[
            'inventory' => $inventory,
        ]);
    }

    /**
     * Add the product in the RiskOfUse table for the occupational physician
     *
     * @Route("/use/{id}", name="inventory.use")
     *
     * @param Inventory $inventory
     * @return HttpFoundationResponse
     */
    public function useItem(Inventory $inventory)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        //Add in RiskOfUse
        $risk = new RiskOfUse();
        $risk->setUser($this->getUser());
        if ($inventory->getProduct()){
            $risk->setProduct($inventory->getProduct());
        }
        else $risk->setMix($inventory->getMix());

        $this->em->persist($risk);
        $this->em->flush();
        $this->addFlash('success', 'Le produit a été utilisé.');

        return $this->render('pages/preview.html.twig',[
            'inventory' => $inventory,
        ]);
    }

    /**
     * Delete mix option
     *
     * @Route("/mix/delete/{id}", name="mix.delete", methods="DELETE")
     *
     * @param Inventory $inventory
     * @param Request $request
     * @return RedirectResponse
     */
    public function deleteMix(Inventory $inventory, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // analyse the csrf token and if it is valid them the object is deleted
        if ($this->isCsrfTokenValid('delete' . $inventory->getId(), $request->get('_token'))) {
            $this->em->remove($inventory);
            $this->em->flush();
            $this->addFlash('success', "Solution supprimée avec succès");
        }
        return $this->redirectToRoute('inventory.mix');
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


}