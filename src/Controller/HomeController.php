<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;

use Twig\Environment;

class HomeController extends AbstractController
{
    /**
     * Undocumented function
     *
     * @return HttpFoundationResponse
     */
    public function index():HttpFoundationResponse
    {
        return $this->render('pages/home.html.twig');
    }

}