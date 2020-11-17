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
     * Display the inventory list
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

}