<?php

namespace App\Controller\ProductManager;

use App\Entity\TrashCan;
use App\Form\TrashCanType;
use App\Repository\TrashCanRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;
use Symfony\Contracts\Translation\TranslatorInterface;


class ProductManagerTrashCanController extends AbstractController{

    /**
     * @var TrashCanRepository
     */
    private $trashCanRep;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var Security
     */
    private $security;

    /**
     * ProductManagerTrashCanController constructor.
     * @param TrashCanRepository $trashCanRep
     * @param EntityManagerInterface $em
     * @param Security $security
     */
    public function __construct(TrashCanRepository $trashCanRep, EntityManagerInterface $em, Security $security)
    {
        $this->trashCanRep = $trashCanRep;
        $this->em = $em;
        $this->security = $security;
    }

    /**
     * Display the trashCan manager
     * 
     * @Route("/productmanager/trashCan", name="productmanager.trashCan.index")
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
        $trashCans = $paginatorInterface->paginate(
            $this->trashCanRep->findAllOrderQuery(),
            $request->query->getInt('page', 1),
            10
        );
        
        return $this->render('productmanager/trashCan/index.html.twig', [
            'trashCans' => $trashCans, // trashCan list
            
            ]);
    }

    /**
     * Display creation form
     * 
     * @Route("/productmanager/trashCan/create", name="productmanager.trashCan.new")
     *
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function new(Request $request, TranslatorInterface $translator)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a creation form
        $trashCan = new TrashCan();
        $form = $this->createForm(TrashCanType::class, $trashCan);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them the object is created
        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($trashCan);
            $this->em->flush();
            $message = $translator->trans('Trash created successfully');
            $this->addFlash('success', $message);
            return $this->redirectToRoute('productmanager.trashCan.index');
        }

        return $this->render('productmanager/trashCan/new.html.twig', [
            'trashCan' => $trashCan, // empty object
            'form' => $form->createView() // creation form
        ]); 
    }

    /**
     * Display edit form
     * 
     * @Route("/productmanager/trashCan/{id}", name="productmanager.trashCan.edit", methods="GET|POST")
     *
     * @param TrashCan $trashCan
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function edit(TrashCan $trashCan, Request $request, TranslatorInterface $translator)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a form to modify information
        $form = $this->createForm(TrashCanType::class, $trashCan);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them informations are updated
        if ($form->isSubmitted() && $form->isValid()) {

            $this->em->flush();
            $message = $translator->trans('Trash modified successfully');
            $this->addFlash('success', 'Poubelle modifiée avec succès');

            return $this->redirectToRoute('productmanager.trashCan.index');
        }


        return $this->render('productmanager/trashCan/edit.html.twig', [
            'trashCan' => $trashCan, // targeted object
            'form' => $form->createView(), // edit form
        ]);
    }

    /**
     * Delete option
     * 
     * @Route("/productmanager/trashCan/{id}", name="productmanager.trashCan.delete", methods="DELETE")
     *
     * @param trashCan $trashCan
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(TrashCan $trashCan, Request $request, TranslatorInterface $translator)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        if ($this->isCsrfTokenValid('delete' . $trashCan->getId(), $request->get('_token'))) {
            $this->em->remove($trashCan);
            $this->em->flush();
            $message = $translator->trans('Trash deleted successfully');
            $this->addFlash('success', 'Poubelle supprimée avec succès');
        }
        return $this->redirectToRoute('productmanager.trashCan.index');
    }

    /**
     * Cancel an action in form
     * 
     * @Route("/productmanager/cancel/trashCan", name="productmanager.trashCan.cancel")
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function cancel(TranslatorInterface $translator)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }
        $message = $translator->trans('Modification have not been saved');
        $this->addFlash('warning', $message);

        return $this->redirectToRoute('productmanager.trashCan.index');
    }
}