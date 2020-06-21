<?php

namespace App\Controller\ProductManager;

use App\Entity\Product;
use App\Form\ProductType;
use App\Entity\ProductSearch;
use App\Form\ProductSearchType;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;


class ProductManagerProductController extends AbstractController{

    /**
     * @var ProductRepository
     */
    private $productRep;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var Security
     */
    private $security;

    /**
     * ProductManagerProductController constructor.
     * @param ProductRepository $productRep
     * @param EntityManagerInterface $em
     * @param Security $security
     */
    public function __construct(ProductRepository $productRep, EntityManagerInterface $em, Security $security)
    {
        $this->productRep = $productRep;
        $this->em = $em;
        $this->security = $security;
    }

    /**
     * @Route("/productmanager/product", name="productmanager.product.index")
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

        $search = new ProductSearch();
        $form = $this->createForm(ProductSearchType::class, $search);
        $form->handleRequest($request);

        $products = $paginatorInterface->paginate(
            $this->productRep->findSearchedQuery($search),
            $request->query->getInt('page', 1),
            10
        );
        
        return $this->render('productmanager/product/index.html.twig', [
            'products' => $products,
            'form' => $form->createView(),
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
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

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
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $product->setUpdatedAt(new \Datetime());
            
            $this->em->flush();
            $this->addFlash('success', 'produit modifié avec succès');
            
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
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        if ($this->isCsrfTokenValid('delete' . $product->getId(), $request->get('_token'))) {
            $this->em->remove($product);
            $this->em->flush();
            $this->addFlash('success', 'Produit supprimé avec succès');
        }
        return $this->redirectToRoute('productmanager.product.index');
    }

    /**
     * @Route("/productmanager/cancel/product", name="productmanager.product.cancel")
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function cancel(Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $this->addFlash('warning', 'produit non enregistré');

        return $this->redirectToRoute('productmanager.product.index');
    }
}