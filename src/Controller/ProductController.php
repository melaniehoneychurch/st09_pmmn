<?php
namespace App\Controller;

use App\Entity\Product;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ProductRepository;
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
    public function index():HttpFoundationResponse
    {
        $products = $this->productRep->findAll();
        return $this->render('product/index.html.twig', compact('products'));
    }

    /**
     * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     * cocur/slugify componer deploy problem
     * Temporary slug=frenchName
     * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     * 
     * @Route("/products/{slug}-{id}", name="product.show", requirements={"slug": "[a-z0-9\-]*"})
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
            'product' => $product
        ]);
    }

    /**
     * Temporary function for testing
     * @Route("/addProduct", name="product.addTestValue")
     *
     * @return HttpFoundationResponse
     */
    public function addTestValue():HttpFoundationResponse
    {
        $product = new Product();
        $product->setFrenchName('test');

        $this->em->persist($product);
        $this->em->flush();

        return $this->redirectToRoute('product.index');
    }

}