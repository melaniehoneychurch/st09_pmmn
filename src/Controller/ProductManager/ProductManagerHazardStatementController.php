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

        $search = new HazardStatementSearch();
        $form = $this->createForm(HazardStatementSearchType::class, $search);
        $form->handleRequest($request);
        
        $hazardStatements = $paginatorInterface->paginate(
            $this->hazardStatementRep->findSearchedQuery($search),
            $request->query->getInt('page', 1),
            10
        );
        
        return $this->render('productmanager/hazardStatement/index.html.twig', [
            'hazardStatements' => $hazardStatements,
            'form' => $form->createView(),
            ]);

    }

    /**
     * @Route("/productmanager/hazardStatement/create", name="productmanager.hazardStatement.new")
     *
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function new(Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $hazardStatement = new HazardStatement();

        $form = $this->createForm(HazardStatementType::class, $hazardStatement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($hazardStatement);
            $this->em->flush();
            $this->addFlash('success', 'Mention de danger créée avec succès');
            return $this->redirectToRoute('productmanager.hazardStatement.index');
        }

        return $this->render('productmanager/hazardStatement/new.html.twig', [
            'hazardStatement' => $hazardStatement,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/productmanager/hazardStatement/{id}", name="productmanager.hazardStatement.edit", methods="GET|POST")
     *
     * @param HazardStatement $hazardStatement
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function edit(HazardStatement $hazardStatement, Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $form = $this->createForm(HazardStatementType::class, $hazardStatement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
                $this->em->flush();
                $this->addFlash('success', 'mention de danger modifié avec succès');
            
            return $this->redirectToRoute('productmanager.hazardStatement.index');
        }

        return $this->render('productmanager/hazardStatement/edit.html.twig', [
            'hazardStatement' => $hazardStatement,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/productmanager/hazardStatement/{id}", name="productmanager.hazardStatement.delete", methods="DELETE")
     *
     * @param hazardStatement $hazardStatement
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(HazardStatement $hazardStatement, Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        if ($this->isCsrfTokenValid('delete' . $hazardStatement->getId(), $request->get('_token'))) {
            $this->em->remove($hazardStatement);
            $this->em->flush();
            $this->addFlash('success', 'Mention de danger supprimée avec succès');
        }
        return $this->redirectToRoute('productmanager.hazardStatement.index');
    }

    /**
     * @Route("/productmanager/cancel/hazardStatement", name="productmanager.hazardStatement.cancel")
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function cancel(Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $this->addFlash('warning', 'Mention de danger non enregistré');

        return $this->redirectToRoute('productmanager.hazardStatement.index');
    }
}