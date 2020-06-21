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
     * @Route("/productmanager/trashCan", name="productmanager.trashCan.index")
     *
     * @param PaginatorInterface $paginatorInterface
     * @param Request $request
     * @return Response
     */
    public function index(PaginatorInterface $paginatorInterface, Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $trashCans = $paginatorInterface->paginate(
            $this->trashCanRep->findAllOrderQuery(),
            $request->query->getInt('page', 1),
            10
        );
        
        return $this->render('productmanager/trashCan/index.html.twig', [
            'trashCans' => $trashCans,
            
            ]);
    }

    /**
     * @Route("/productmanager/trashCan/create", name="productmanager.trashCan.new")
     *
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function new(Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $trashCan = new TrashCan();

        $form = $this->createForm(TrashCanType::class, $trashCan);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($trashCan);
            $this->em->flush();
            $this->addFlash('success', 'Poubelle créée avec succès');
            return $this->redirectToRoute('productmanager.trashCan.index');
        }

        return $this->render('productmanager/trashCan/new.html.twig', [
            'trashCan' => $trashCan,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/productmanager/trashCan/{id}", name="productmanager.trashCan.edit", methods="GET|POST")
     *
     * @param TrashCan $trashCan
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function edit(TrashCan $trashCan, Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $form = $this->createForm(TrashCanType::class, $trashCan);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if($form->get('cancel')->isClicked()){
                $this->addFlash('warning', 'Poubelle non enregistré');

            }else{
            $this->em->flush();
            $this->addFlash('success', 'Poubelle modifié avec succès');
            }
            return $this->redirectToRoute('productmanager.trashCan.index');
        }
        

        return $this->render('productmanager/trashCan/edit.html.twig', [
            'trashCan' => $trashCan,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/productmanager/trashCan/{id}", name="productmanager.trashCan.delete", methods="DELETE")
     *
     * @param trashCan $trashCan
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(TrashCan $trashCan, Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        if ($this->isCsrfTokenValid('delete' . $trashCan->getId(), $request->get('_token'))) {
            $this->em->remove($trashCan);
            $this->em->flush();
            $this->addFlash('success', 'Poubelle supprimée avec succès');
        }
        return $this->redirectToRoute('productmanager.trashCan.index');
    }

    /**
     * @Route("/productmanager/cancel/trashCan", name="productmanager.trashCan.cancel")
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function cancel(Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $this->addFlash('warning', 'Poubelle non enregistré');

        return $this->redirectToRoute('productmanager.trashCan.index');
    }
}