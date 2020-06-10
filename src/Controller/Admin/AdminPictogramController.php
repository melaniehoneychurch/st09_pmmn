<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\PictogramType;
use App\Entity\Pictogram;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PictogramRepository;
use Symfony\Component\HttpFoundation\Request;


class AdminPictogramController extends AbstractController{

    public function __construct(PictogramRepository $pictogramRep, EntityManagerInterface $em)
    {
        $this->pictogramRep = $pictogramRep;
        $this->em = $em;
    }

    /**
     * @Route("/admin/pictogram", name="admin.pictogram.index")
     *
     * @return void
     */
    public function index()
    {
        $pictograms = $this->pictogramRep->findAll();

        return $this->render('admin/pictogram/index.html.twig', [
            'pictograms' => $pictograms,
            'current_admin_menu' => 'pictogram',
        ]);
    }

    /**
     * @Route("/admin/pictogram/create", name="admin.pictogram.new")
     *
     * @return void
     */
    public function new(Request $request)
    {
        $pictogram = new Pictogram();

        $form = $this->createForm(PictogramType::class, $pictogram);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($pictogram);
            $this->em->flush();
            $this->addFlash('success', 'Pictogramme créé avec succès');
            return $this->redirectToRoute('admin.pictogram.index');
        }

        return $this->render('admin/pictogram/new.html.twig', [
            'pictogram' => $pictogram,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/admin/pictogram/{id}", name="admin.pictogram.edit", methods="GET|POST")
     *
     * @return void
     */
    public function edit(Pictogram $pictogram, Request $request)
    {

        $form = $this->createForm(PictogramType::class, $pictogram);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if($form->get('cancel')->isClicked()){
                $this->addFlash('warning', 'Pictogramme non enregistré');

            }else{

            $pictogram->setUpdatedAt(new \Datetime());

            $this->em->flush();
            $this->addFlash('success', 'Pictogramme modifié avec succès');
            }
            return $this->redirectToRoute('admin.pictogram.index');
        }

        return $this->render('admin/pictogram/edit.html.twig', [
            'pictogram' => $pictogram,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/pictogram/{id}", name="admin.pictogram.delete", methods="DELETE")
     *
     * @param pictogram $pictogram
     * @return void
     */
    public function delete(Pictogram $pictogram, Request $request)
    {

        if ($this->isCsrfTokenValid('delete' . $pictogram->getId(), $request->get('_token'))) {
            $this->em->remove($pictogram);
            $this->em->flush();
            $this->addFlash('success', 'Pictogramme supprimé avec succès');
        }
        return $this->redirectToRoute('admin.pictogram.index');
    }
}