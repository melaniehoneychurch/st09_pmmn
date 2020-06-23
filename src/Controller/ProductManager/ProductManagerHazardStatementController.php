<?php

namespace App\Controller\ProductManager;

use App\Entity\HazardStatement;
use App\Entity\HazardStatementSearch;
use App\Form\HazardStatementSearchType;
use App\Form\HazardStatementType;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use App\Repository\HazardStatementRepository;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;


class ProductManagerHazardStatementController extends AbstractController{

    /**
     * @var HazardStatementRepository
     */
    private $hazardStatementRep;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var Security
     */
    private $security;

    /**
     * ProductManagerHazardStatementController constructor.
     * @param HazardStatementRepository $hazardStatementRep
     * @param EntityManagerInterface $em
     * @param Security $security
     */
    public function __construct(HazardStatementRepository $hazardStatementRep, EntityManagerInterface $em, Security $security)
    {
        $this->hazardStatementRep = $hazardStatementRep;
        $this->em = $em;
        $this->security = $security;
    }

    /**
     * Display the hazard statements manager
     * 
     * @Route("/productmanager/hazardStatement", name="productmanager.hazardStatement.index")
     *
     * @param PaginatorInterface $paginatorInterface
     * @param Request $request
     * @return Response
     */
    public function index(PaginatorInterface $paginatorInterface, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a search form for hazard statements
        $search = new HazardStatementSearch();
        $form = $this->createForm(HazardStatementSearchType::class, $search);
        $form->handleRequest($request);
        
        // generate a paging interface for hazard statements
        $hazardStatements = $paginatorInterface->paginate(
            $this->hazardStatementRep->findSearchedQuery($search),
            $request->query->getInt('page', 1),
            10
        );
        
        return $this->render('productmanager/hazardStatement/index.html.twig', [
            'hazardStatements' => $hazardStatements, // hazard statements list
            'form' => $form->createView(), // generate form
            ]);

    }

    /**
     * Display new hazard statements form
     * 
     * @Route("/productmanager/hazardStatement/create", name="productmanager.hazardStatement.new")
     *
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function new(Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }
        
        // generate a form to create a new hazard statements
        $hazardStatement = new HazardStatement();
        $form = $this->createForm(HazardStatementType::class, $hazardStatement);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them the hazard statement is created
        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($hazardStatement);
            $this->em->flush();
            $this->addFlash('success', 'Mention de danger créée avec succès');
            return $this->redirectToRoute('productmanager.hazardStatement.index');
        }

        return $this->render('productmanager/hazardStatement/new.html.twig', [
            'hazardStatement' => $hazardStatement, // empty object
            'form' => $form->createView() // creation form
        ]);
    }

    /**
     * Display edit form
     * 
     * @Route("/productmanager/hazardStatement/{id}", name="productmanager.hazardStatement.edit", methods="GET|POST")
     *
     * @param HazardStatement $hazardStatement
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function edit(HazardStatement $hazardStatement, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a form to modify information
        $form = $this->createForm(HazardStatementType::class, $hazardStatement);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them informations are updated
        if ($form->isSubmitted() && $form->isValid()) {
            
                $this->em->flush();
                $this->addFlash('success', 'mention de danger modifié avec succès');
            
            return $this->redirectToRoute('productmanager.hazardStatement.index');
        }

        return $this->render('productmanager/hazardStatement/edit.html.twig', [
            'hazardStatement' => $hazardStatement, // targeted object
            'form' => $form->createView(), // edit form
        ]);
    }

    /**
     * Delete option
     * 
     * @Route("/productmanager/hazardStatement/{id}", name="productmanager.hazardStatement.delete", methods="DELETE")
     *
     * @param hazardStatement $hazardStatement
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(HazardStatement $hazardStatement, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // analyse the csrf token and if it is valid them the object is deleted
        if ($this->isCsrfTokenValid('delete' . $hazardStatement->getId(), $request->get('_token'))) {
            $this->em->remove($hazardStatement);
            $this->em->flush();
            $this->addFlash('success', 'Mention de danger supprimée avec succès');
        }
        return $this->redirectToRoute('productmanager.hazardStatement.index');
    }

    /**
     * Cancel an action in form
     * 
     * @Route("/productmanager/cancel/hazardStatement", name="productmanager.hazardStatement.cancel")
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function cancel(Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $this->addFlash('warning', 'Mention de danger non enregistré');

        return $this->redirectToRoute('productmanager.hazardStatement.index');
    }
}