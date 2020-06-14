<?php

namespace App\Controller\ProductManager;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\TrashCanType;
use App\Entity\TrashCan;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\TrashCanRepository;
use Symfony\Component\HttpFoundation\Request;


class ProductManagerTrashCanController extends AbstractController{

    /**
     * @var TrashCanRepository
     */
    private $trashCanRep;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    public function __construct(TrashCanRepository $trashCanRep, EntityManagerInterface $em)
    {
        $this->trashCanRep = $trashCanRep;
        $this->em = $em;
    }

    /**
     * @Route("/productmanager/trashCan", name="productmanager.trashCan.index")
     *
     * @return Response
     */
    public function index()
    {
        $trashCans = $this->trashCanRep->findAll();

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
     * @return RedirectResponse
     */
    public function cancel(Request $request)
    {

        $this->addFlash('warning', 'Poubelle non enregistré');

        return $this->redirectToRoute('productmanager.trashCan.index');
    }
}