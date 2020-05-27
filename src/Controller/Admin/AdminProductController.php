<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\ProductType;
use App\Entity\Product;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Request;


class AdminProductController extends AbstractController{

    public function __construct(ProductRepository $productRep, EntityManagerInterface $em)
    {
        $this->productRep = $productRep;
        $this->em = $em;
    }

    /**
     * @Route("/admin", name="admin.product.index")
     *
     * @return void
     */
    public function index()
    {
        $products = $this->productRep->findAll();

        return $this->render('admin/index.html.twig', [
            'products' => $products,
        ]);
    }

    /**
     * @Route("/admin/product/create", name="admin.product.new")
     *
     * @return void
     */
    public function new(Request $request)
    {
        $product = new Product();

        $form = $this->createForm(productType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($product);
            $this->em->flush();
            $this->addFlash('success', 'produit créé avec succès');
            return $this->redirectToRoute('admin.product.index');
        }

        return $this->render('admin/product/new.html.twig', [
            'product' => $product,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/admin/product/{id}", name="admin.product.edit", methods="GET|POST")
     *
     * @return void
     */
    public function edit(Product $product, Request $request)
    {

        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->flush();
            $this->addFlash('success', 'produit modifié avec succès');
            return $this->redirectToRoute('admin.product.index');
        }

        return $this->render('admin/product/edit.html.twig', [
            'product' => $product,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/product/{id}", name="admin.product.delete", methods="DELETE")
     *
     * @param product $product
     * @return void
     */
    public function delete(Product $product, Request $request)
    {

        if ($this->isCsrfTokenValid('delete' . $product->getId(), $request->get('_token'))) {
            $this->em->remove($product);
            $this->em->flush();
            $this->addFlash('success', 'produit supprimé avec succès');
        }
        return $this->redirectToRoute('admin.product.index');
    }
}