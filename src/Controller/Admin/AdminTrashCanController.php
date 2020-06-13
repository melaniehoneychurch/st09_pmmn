<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\TrashCanType;
use App\Entity\TrashCan;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\TrashCanRepository;
use Symfony\Component\HttpFoundation\Request;


class AdminTrashCanController extends AbstractController{

    public function __construct(TrashCanRepository $trashCanRep, EntityManagerInterface $em)
    {
        $this->trashCanRep = $trashCanRep;
        $this->em = $em;
    }

    /**
     * @Route("/admin/trashCan", name="admin.trashCan.index")
     *
     * @return void
     */
    public function index()
    {
        $trashCans = $this->trashCanRep->findAll();

        return $this->render('admin/trashCan/index.html.twig', [
            'trashCans' => $trashCans,
            'current_admin_menu' => 'trashCan',
        ]);
    }

    /**
     * @Route("/admin/trashCan/create", name="admin.trashCan.new")
     *
     * @return void
     */
    public function new(Request $request)
    {
        $trashCan = new TrashCan();

        $form = $this->createForm(TrashCanType::class, $trashCan);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($trashCan);
            $this->em->flush();
            $this->addFlash('success', 'Poubelle créé avec succès');
            return $this->redirectToRoute('admin.trashCan.index');
        }

        return $this->render('admin/trashCan/new.html.twig', [
            'trashCan' => $trashCan,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/admin/trashCan/{id}", name="admin.trashCan.edit", methods="GET|POST")
     *
     * @return void
     */
    public function edit(TrashCan $trashCan, Request $request)
    {

        $form = $this->createForm(TrashCanType::class, $trashCan);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->flush();
            $this->addFlash('success', 'Poubelle modifié avec succès');
            return $this->redirectToRoute('admin.trashCan.index');
        }

        return $this->render('admin/trashCan/edit.html.twig', [
            'trashCan' => $trashCan,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/trashCan/{id}", name="admin.trashCan.delete", methods="DELETE")
     *
     * @param trashCan $trashCan
     * @return void
     */
    public function delete(TrashCan $trashCan, Request $request)
    {

        if ($this->isCsrfTokenValid('delete' . $trashCan->getId(), $request->get('_token'))) {
            $this->em->remove($trashCan);
            $this->em->flush();
            $this->addFlash('success', 'Poubelle supprimé avec succès');
        }
        return $this->redirectToRoute('admin.trashCan.index');
    }
}