<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;



class PageController extends AbstractController
{
    
    /**
     * @Route("/scan", name="scan")
     * 
     * @return HttpFoundationResponse
     */
    public function scan():HttpFoundationResponse
    {
        
        return $this->render('pages/qr_code_scanner.html.twig', [
            
            ]);
    }
}