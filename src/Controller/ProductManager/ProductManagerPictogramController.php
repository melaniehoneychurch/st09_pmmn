<?php

namespace App\Controller\ProductManager;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\PictogramType;
use App\Entity\Pictogram;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PictogramRepository;
use Symfony\Component\HttpFoundation\Request;


class ProductManagerPictogramController extends AbstractController{

    /**
     * @var PictogramRepository
     */
    private $pictogramRep;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    public function __construct(PictogramRepository $pictogramRep, EntityManagerInterface $em)
    {
        $this->pictogramRep = $pictogramRep;
        $this->em = $em;
    }

    /**
     * @Route("/productmanager/pictogram", name="productmanager.pictogram.index")
     *
     * @return Response
     */
    public function index()
    {
        $pictograms = $this->pictogramRep->findAll();

        return $this->render('productmanager/pictogram/index.html.twig', [
            'pictograms' => $pictograms,
        ]);
    }

    /**
     * @Route("/productmanager/pictogram/create", name="productmanager.pictogram.new")
     *
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function new(Request $request)
    {
        $pictogram = new Pictogram();

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
            return $this->redirectToRoute('productmanager.pictogram.index');
        }


        return $this->render('productmanager/pictogram/new.html.twig', [
            'pictogram' => $pictogram,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/productmanager/pictogram/{id}", name="productmanager.pictogram.edit", methods="GET|POST")
     *
     * @param Pictogram $pictogram
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function edit(Pictogram $pictogram, Request $request)
    {

        $form = $this->createForm(PictogramType::class, $pictogram);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $pictogram->setUpdatedAt(new \Datetime());

            $this->em->flush();
            $this->addFlash('success', 'Pictogramme modifié avec succès');
            return $this->redirectToRoute('productmanager.pictogram.index');
        }

        return $this->render('productmanager/pictogram/edit.html.twig', [
            'pictogram' => $pictogram,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/productmanager/pictogram/{id}", name="productmanager.pictogram.delete", methods="DELETE")
     *
     * @param pictogram $pictogram
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(Pictogram $pictogram, Request $request)
    {

        if ($this->isCsrfTokenValid('delete' . $pictogram->getId(), $request->get('_token'))) {
            $this->em->remove($pictogram);
            $this->em->flush();
            $this->addFlash('success', 'Pictogramme supprimé avec succès');
        }
        return $this->redirectToRoute('productmanager.pictogram.index');
    }
}