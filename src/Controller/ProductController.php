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
        $product->setFrenchName('Chloroforme')
            ->setEnglishName('Chloroform')
            ->setNomenclature('1,1,1-trichloromethane')
            ->setOtherName('Chloretherid')
            ->setCasNumber('67-66-3')
            ->setMolarMass(119.38)
            ->setDensity(1.49)
            ->setMeltingTemperature(-64)
            ->setBoilingTemperature(62)
            ->setOpticalIndex(1.442)
            ->setAutoflameTemperature(0)
            ->setFormula('CHCl3')
            ->setRiskOfUse('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue maximus leo vehicula tempus. Cras venenatis aliquet hendrerit. Nullam imperdiet sapien sit amet massa blandit.')
            ->setDangerousMixtures('Au cours d\'un stockage prolongé, en présence d\'oxygène et sous l\'action de la lumière, le chloroforme a tendance à se décomposer en donnant du chlorure d\'hydrogène, du chlore et de l\'oxychlorure de carbone (phosgène) qui est un produit extrêmement toxique')
            ->setFrenchCommentary('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut est nec arcu eleifend tincidunt. Praesent ultricies erat sit amet dolor facilisis scelerisque. Quisque efficitur erat lorem, ac feugiat risus semper at. Aliquam pharetra ut dolor ut lobortis. Etiam hendrerit magna eu orci tempor placerat. Nam ac vulputate arcu. Duis volutpat, felis at vestibulum dictum, nisl sapien viverra diam, sit amet auctor elit dui ac eros. Class aptent taciti sociosqu ad litora torquent per conubia.')
            ->setUpdatedAt(new \DateTime());

        $this->em->persist($product);
        $this->em->flush();

        return $this->redirectToRoute('product.index');
    }

}