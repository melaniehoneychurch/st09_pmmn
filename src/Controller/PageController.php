<?php
namespace App\Controller;

use App\Entity\Contact;
use App\Entity\Inventory;
use App\Entity\InventorySearch;
use App\Entity\ScanSearch;
use App\Form\ContactType;
use App\Form\InventorySearchType;
use App\Form\ScanSearchType;
use App\Notification\ContactNotification;
use App\Repository\InventoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Symfony\Component\Security\Core\Security;
use Symfony\Contracts\Translation\TranslatorInterface;


class PageController extends AbstractController
{

    /**
     * @var InventoryRepository
     */
    private $inventoryRep;
    /**
     * @var EntityManagerInterface
     */
    private $em;
    /**
     * @var Security
     */
    private $security;

    public function __construct(InventoryRepository $inventoryRep, EntityManagerInterface $em, Security $security)
    {
        $this->inventoryRep = $inventoryRep;
        $this->em = $em;
        $this->security = $security;
    }

    /**
     * Display qr scan page
     *
     * @Route("/scan", name="scan")
     *
     * @param Request $request
     * @return HttpFoundationResponse
     */
    public function scan(Request $request):HttpFoundationResponse
    {
        // generate a search form
        $search = new ScanSearch();
        $form = $this->createForm(ScanSearchType::class, $search);
        $form->handleRequest($request);


        // analyse the form response and if the form is valid them the object is created
        if ($form->isSubmitted() && $form->isValid()) {
            $code = $search->getCode();
            return $this->redirectToRoute('inventory.preview', ['qrcode'=>$code]);
        }
        
        return $this->render('pages/qr_code_scanner.html.twig', [
            'form' => $form->createView(),
            ]);
    }


    /**
     *
     * @Route ("/contact", name="contact")
     *
     * @param Request $request
     * @param ContactNotification $notification
     * @return HttpFoundationResponse
     */
    public function contact(Request $request, ContactNotification $notification, TranslatorInterface $translator):Response
    {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $notification->notify($contact);
            $message = $translator->trans('Your message has been sent');
            $this->addFlash('success', $message);
            //return $this->redirectToRoute('product.index');
        }

        return $this->render('pages/contact.html.twig', [
            'form' => $form->createView()
        ]);

    }

    /**
     * @Route ("/change-locale/{locale}", name="change_locale")
     * @param $locale
     * @param Request $request
     * @param $locale
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function changeLocale($locale, Request $request)
    {
        //On stocke la langue demandée dans la session
        $request->getSession()->set('_locale', $locale);

        //on revient sur la page précédente
        return $this->redirect($request->headers->get('referer'));
    }
}