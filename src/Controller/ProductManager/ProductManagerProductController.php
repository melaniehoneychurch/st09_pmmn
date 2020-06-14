<?php

namespace App\Controller\ProductManager;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\ProductType;
use App\Entity\Product;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Request;


class ProductManagerProductController extends AbstractController{

    /**
     * @var ProductRepository
     */
    private $productRep;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    public function __construct(ProductRepository $productRep, EntityManagerInterface $em)
    {
        $this->productRep = $productRep;
        $this->em = $em;
    }

    /**
     * @Route("/productmanager/product", name="productmanager.product.index")
     *
     * @return Response
     */
    public function index()
    {
        $products = $this->productRep->findAll();

        return $this->render('productmanager/product/index.html.twig', [
            'products' => $products,
        ]);
    }

    /**
     * @Route("/productmanager/product/create", name="productmanager.product.new")
     *
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function new(Request $request)
    {
        $product = new Product();

        $form = $this->createForm(productType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($product);
            $this->em->flush();
            $this->addFlash('success', 'Produit créé avec succès');
            return $this->redirectToRoute('productmanager.product.index');
        }

        return $this->render('productmanager/product/new.html.twig', [
            'product' => $product,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/productmanager/product/{id}", name="productmanager.product.edit", methods="GET|POST")
     *
     * @param Product $product
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function edit(Product $product, Request $request)
    {

        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $product->setUpdatedAt(new \Datetime());
            
            $this->em->flush();
            $this->addFlash('success', 'Produit modifié avec succès');
            return $this->redirectToRoute('productmanager.product.index');
        }

        return $this->render('productmanager/product/edit.html.twig', [
            'product' => $product,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/productmanager/product/{id}", name="productmanager.product.delete", methods="DELETE")
     *
     * @param product $product
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(Product $product, Request $request)
    {

        if ($this->isCsrfTokenValid('delete' . $product->getId(), $request->get('_token'))) {
            $this->em->remove($product);
            $this->em->flush();
            $this->addFlash('success', 'Produit supprimé avec succès');
        }
        return $this->redirectToRoute('productmanager.product.index');
    }
}