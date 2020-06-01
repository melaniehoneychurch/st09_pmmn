<?php
namespace App\Controller;

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
    public function index(PaginatorInterface $paginatorInterface, Request $request):HttpFoundationResponse
    {
        $search = new ProductSearch();
        $form = $this->createForm(ProductSearchType::class, $search);
        $form->handleRequest($request);

        $products = $paginatorInterface->paginate(
            $this->productRep->findAllVisibleQuery($search),
            $request->query->getInt('page', 1),
            10
        );
        


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
        return $this->render('product/show.html.twig', [
            'product' => $product,
            'dangerPictograms' => $product->getDangerPictograms(),
            'obligationPictograms' => $product->getObligationPictograms(),
            'update' => $product->getUpdatedAt()->format('Y-m-d H:i:s'),
        ]);
    }

}