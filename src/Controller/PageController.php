<?php
namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Notification\ContactNotification;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;



class PageController extends AbstractController
{
    
    /**
     * Display qr scan page
     * 
     * @Route("/scan", name="scan")
     * 
     * @return HttpFoundationResponse
     */
    public function scan():HttpFoundationResponse
    {
        
        return $this->render('pages/qr_code_scanner.html.twig', [
            
            ]);
    }

    /**
     *
     * @Route ("/contact", name="contact")
     *
     * @param Request $request
     * @return HttpFoundationResponse
     */
    public function contact(Request $request, ContactNotification $notification):Response
    {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $notification->notify($contact);
            $this->addFlash('success', 'Votre message a bien été envoyé.');
            //return $this->redirectToRoute('product.index');
        }

        return $this->render('pages/contact.html.twig', [
            'form' => $form->createView()
        ]);

    }
}