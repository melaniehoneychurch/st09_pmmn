<?php
namespace App\Controller;

use App\Entity\Product;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ProductRepository;


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