<?php

namespace App\Controller\ProductManager;

use App\Entity\Pictogram;
use App\Form\PictogramType;
use App\Repository\PictogramRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;


class ProductManagerPictogramController extends AbstractController{

    /**
     * @var PictogramRepository
     */
    private $pictogramRep;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var Security
     */
    private $security;

    /**
     * ProductManagerPictogramController constructor.
     * @param PictogramRepository $pictogramRep
     * @param EntityManagerInterface $em
     * @param Security $security
     */
    public function __construct(PictogramRepository $pictogramRep, EntityManagerInterface $em, Security $security)
    {
        $this->pictogramRep = $pictogramRep;
        $this->em = $em;
        $this->security = $security;
    }

    /**
     * Display the pictogram manager
     * 
     * @Route("/productmanager/pictogram", name="productmanager.pictogram.index")
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

        // generate a paging interface
        $pictograms = $paginatorInterface->paginate(
            $this->pictogramRep->findAllOrderQuery(),
            $request->query->getInt('page', 1),
            10
        );
        
        return $this->render('productmanager/pictogram/index.html.twig', [
            'pictograms' => $pictograms, // pictograms list
            
            ]);
    }

    /**
     * Display creation form
     * 
     * @Route("/productmanager/pictogram/create", name="productmanager.pictogram.new")
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

        // generate a creation form
        $pictogram = new Pictogram();
        $form = $this->createForm(PictogramType::class, $pictogram);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them the object is created
        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($pictogram);
            $this->em->flush();
            $this->addFlash('success', 'Pictogramme créé avec succès');
            return $this->redirectToRoute('productmanager.pictogram.index');
        }

        return $this->render('productmanager/pictogram/new.html.twig', [
            'pictogram' => $pictogram, // empty object
            'form' => $form->createView() // creation form
        ]);
    }

    /**
     * Display edit form
     * 
     * @Route("/productmanager/pictogram/{id}", name="productmanager.pictogram.edit", methods="GET|POST")
     *
     * @param Pictogram $pictogram
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function edit(Pictogram $pictogram, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a form to modify information
        $form = $this->createForm(PictogramType::class, $pictogram);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them informations are updated
        if ($form->isSubmitted() && $form->isValid()) {
            
            $pictogram->setUpdatedAt(new \Datetime());

            $this->em->flush();
            $this->addFlash('success', 'Pictogramme modifié avec succès');
            
            return $this->redirectToRoute('productmanager.pictogram.index');
        }

        return $this->render('productmanager/pictogram/edit.html.twig', [
            'pictogram' => $pictogram, // targeted object
            'form' => $form->createView(), // edit form
        ]);
    }

    /**
     * Delete option
     * 
     * @Route("/productmanager/pictogram/{id}", name="productmanager.pictogram.delete", methods="DELETE")
     *
     * @param pictogram $pictogram
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(Pictogram $pictogram, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // analyse the csrf token and if it is valid them the object is deleted
        if ($this->isCsrfTokenValid('delete' . $pictogram->getId(), $request->get('_token'))) {
            $this->em->remove($pictogram);
            $this->em->flush();
            $this->addFlash('success', 'Pictogramme supprimé avec succès');
        }
        return $this->redirectToRoute('productmanager.pictogram.index');
    }

    /**
     * Cancel an action in form
     * @Route("/productmanager/cancel/pictogram", name="productmanager.pictogram.cancel")
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

        $this->addFlash('warning', "Les modifications n'ont pas été enregistrées");

        return $this->redirectToRoute('productmanager.pictogram.index');
    }
}