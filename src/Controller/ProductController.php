<?php
namespace App\Controller;

use Endroid\QrCode\LabelAlignment;
use Endroid\QrCode\QrCode;
use Twig\Environment;
use App\Entity\Product;
use App\Entity\ProductSearch;
use App\Form\ProductSearchType;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Dompdf\Dompdf;
use Dompdf\Options;

class ProductController extends AbstractController
{

    public function __construct(ProductRepository $productRep, EntityManagerInterface $em)
    {
        $this->productRep = $productRep;
        $this->em = $em;
    }

    /**
     * Display the product list
     * 
     * @Route("/", name="product.index")
     * 
     * @return HttpFoundationResponse
     */
    public function index(PaginatorInterface $paginatorInterface, Request $request):HttpFoundationResponse
    {
        // generate a search form
        $search = new ProductSearch();
        $form = $this->createForm(ProductSearchType::class, $search);
        $form->handleRequest($request);

        // generate a paging interface
        $products = $paginatorInterface->paginate(
            $this->productRep->findSearchedQuery($search),
            $request->query->getInt('page', 1),
            10
        );
        
        return $this->render('product/index.html.twig', [
            'products' => $products, // products list
            'form' => $form->createView(), // generate form
            ]);
    } 

    /**
     * Display the targeted product
     * 
     * @Route("/products/{slug}-{id}", name="product.show", requirements={"slug": "[a-zA-Z0-9\-]*"})
     * @param [type] $slug
     * @param [type] $id
     * @return Response
     */
    public function show(Product $product, string $slug):Response
    {
        // slugify product name
        if($product->getSlug() !== $slug){
            return $this->redirectToRoute('product.show', [
                'id' => $product->getId(),
                'slug' => $product->getSlug()
            ], 301);
        }
        $qrCode = new QrCode('P'.$product->getId());
        $qrCode->setLabel('P'.$product->getId(), 11);
        return $this->render('product/show.html.twig', [
            'product' => $product, // targeted product
            'dangerPictograms' => $product->getDangerPictograms(),
            'obligationPictograms' => $product->getObligationPictograms(),
            'update' => $product->getUpdatedAt()->format('d/m/Y'),
            'qrCode' => $qrCode,
        ]);
    }

    /**
     * Display product security form
     * 
     * @Route("/products/{slug}-{id}/securityForm", name="product.show.securityForm", requirements={"slug": "[a-zA-Z0-9\-]*"})
     *
     * @param Product $product
     * @param string $slug
     * @return Response
     */
    public function showSecurityForm(Product $product, string $slug): Response
    {
        // slugify product name
        if($product->getSlug() !== $slug){
            return $this->redirectToRoute('product.show', [
                'id' => $product->getId(),
                'slug' => $product->getSlug()
            ], 301);
        }

        return $this->render('product/securityForm.html.twig', [
            'product' => $product, // targeted product
        ]);

    }



}