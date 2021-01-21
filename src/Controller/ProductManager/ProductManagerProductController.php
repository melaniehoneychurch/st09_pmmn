<?php

namespace App\Controller\ProductManager;

use App\Entity\Family;
use App\Entity\Product;
use App\Form\FamilyType;
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
     * Display the product manager
     * 
     * @Route("/productmanager/product", name="productmanager.product.index")
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

        // generate a search form for products
        $search = new ProductSearch();
        $form = $this->createForm(ProductSearchType::class, $search);
        $form->handleRequest($request);
        
        // generate a paging interface
        $products = $paginatorInterface->paginate(
            $this->productRep->findSearchedQuery($search),
            $request->query->getInt('page', 1),
            10
        );
        
        return $this->render('productmanager/product/index.html.twig', [
            'products' => $products, // products list
            'form' => $form->createView(), // search form
            ]);
    }

    /**
     * Display creation form
     * 
     * @Route("/productmanager/product/create", name="productmanager.product.new")
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
        $product = new Product();
        $form = $this->createForm(productType::class, $product);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them the object is created
        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($product);
            $this->em->flush();
            $this->addFlash('success', 'Produit créé avec succès');
            return $this->redirectToRoute('productmanager.product.index');
        }

        return $this->render('productmanager/product/new.html.twig', [
            'product' => $product, // empty object
            'form' => $form->createView() // creation form
        ]);
    }

    /**
     * Display the family creation form
     *
     * @Route("/productmanager/family", name="productmanager.family")
     *
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function family(Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $family = new Family();
        $form = $this->createForm(FamilyType::class, $family);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them the object is created
        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($family);
            $this->em->flush();
            $this->addFlash('success', 'Famille ajoutée avec succès');
            return $this->redirectToRoute('productmanager.product.index');
        }

        return $this->render('productmanager/product/family.html.twig', [
            'family' => $family,
            'form' => $form->createView()
        ]);
    }

    /**
     * Display edit form
     * 
     * @Route("/productmanager/product/{id}", name="productmanager.product.edit", methods="GET|POST")
     *
     * @param Product $product
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function edit(Product $product, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a form to modify information
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them informations are updated
        if ($form->isSubmitted() && $form->isValid()) {

            $product->setUpdatedAt(new \Datetime());
            
            $this->em->flush();
            $this->addFlash('success', 'Produit modifié avec succès');
            
            return $this->redirectToRoute('productmanager.product.index');
        }

        return $this->render('productmanager/product/edit.html.twig', [
            'product' => $product, // targeted object
            'form' => $form->createView(), // edit form
        ]);
    }

    /**
     * Delete option
     * 
     * @Route("/productmanager/product/{id}", name="productmanager.product.delete", methods="DELETE")
     *
     * @param product $product
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(Product $product, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        //check if the product is use in db
        if ($product->getIngredients()->count() !== 0){
            $this->addFlash('danger', 'Vous ne pouvez pas supprimer ce produit car il est associé à au moins une recette.');
            return $this->redirectToRoute('productmanager.product.index');
        }

        // analyse the csrf token and if it is valid them the object is deleted
        if ($this->isCsrfTokenValid('delete' . $product->getId(), $request->get('_token'))) {
            $this->em->remove($product);
            $this->em->flush();
            $this->addFlash('success', 'Produit supprimé avec succès');
        }
        return $this->redirectToRoute('productmanager.product.index');
    }

    /**
     * Cancel an action in form
     * 
     * @Route("/productmanager/cancel/product", name="productmanager.product.cancel")
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

        return $this->redirectToRoute('productmanager.product.index');
    }
}