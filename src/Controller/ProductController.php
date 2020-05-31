<?php
namespace App\Controller;

use App\Entity\Product;
use App\Entity\ProductSearch;
use App\Form\ProductSearchType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class ProductController extends AbstractController
{

    public function __construct(ProductRepository $productRep, EntityManagerInterface $em)
    {
        $this->productRep = $productRep;
        $this->em = $em;
    }

    /**
     * @Route("/products", name="product.index")
     * 
     * @return HttpFoundationResponse
     */
    public function index(Request $request):HttpFoundationResponse
    {
        $search = new ProductSearch();
        $form = $this->createForm(ProductSearchType::class, $search);
        $form->handleRequest($request);

        $products = $this->productRep->findAll();
        return $this->render('product/index.html.twig', [
            'products' => $products,
            'form' => $form->createView(),
            ]);
    }

    /**
     * @Route("/products/{slug}-{id}", name="product.show", requirements={"slug": "[a-zA-Z0-9\-]*"})
     * @param [type] $slug
     * @param [type] $id
     * @return Response
     */
    public function show(Product $product, string $slug):Response
    {
        if($product->getSlug() !== $slug){
            return $this->redirectToRoute('product.show', [
                'id' => $product->getId(),
                'slug' => $product->getSlug()
            ], 301);
        }
        dump($product);
        return $this->render('product/show.html.twig', [
            'product' => $product,
            'dangerPictograms' => $product->getDangerPictograms(),
            'obligationPictograms' => $product->getObligationPictograms(),
            'update' => $product->getUpdatedAt()->format('Y-m-d H:i:s'),
        ]);
    }

}