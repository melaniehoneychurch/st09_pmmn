<?php

namespace App\Controller\User;

use App\Entity\Inventory;
use App\Entity\Mix;
use App\Form\MixType;
use App\Entity\MixSearch;
use App\Form\MixSearchType;
use App\Repository\MixRepository;
use Doctrine\ORM\EntityManagerInterface;
use Endroid\QrCode\QrCode;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;
use Symfony\Contracts\Translation\TranslatorInterface;


class UserMixController extends AbstractController{

    /**
     * @var MixRepository
     */
    private $mixRep;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var Security
     */
    private $security;

    /**
     * UserMixController constructor.
     * @param MixRepository $mixRep
     * @param EntityManagerInterface $em
     * @param Security $security
     */
    public function __construct(MixRepository $mixRep, EntityManagerInterface $em, Security $security)
    {
        $this->mixRep=$mixRep;
        $this->em = $em;
        $this->security = $security;
    }

    /**
     * Display the user
     *
     * @Route("/mix", name="mix.index")
     *
     * @param PaginatorInterface $paginatorInterface
     * @param Request $request
     * @return Response
     */
    public function index(PaginatorInterface $paginatorInterface, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a search form for mix
        $search = new MixSearch();
        $form = $this->createForm(MixSearchType::class, $search);
        $form->handleRequest($request);

        // generate a paging interface
        $mixes = $paginatorInterface->paginate(
            $this->mixRep->findSearchedQuery($search),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('mix/index.html.twig', [
            'mixes' => $mixes, // mixes list
            'form' => $form->createView(), // search form
        ]);
    }

    /**
     *
     * @Route("/mix/mymixes", name="mix.perso")
     *
     * @param PaginatorInterface $paginatorInterface
     * @param Request $request
     * @return Response
     */
    public function perso (PaginatorInterface $paginatorInterface, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a search form for recipe
        /*   $search = new RecipeSearch();
           $form = $this->createForm(RecipeSearchType::class, $search);
           $form->handleRequest($request);*/

        // generate a paging interface
        $mixes = $paginatorInterface->paginate(
            $this->mixRep->findByCreator($this->getUser()),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('mix/perso.html.twig', [
            'mixes' => $mixes, // mixes list
        ]);
    }

    /**
     * Display the user
     *
     * @Route("/mix/create", name="mix.new")
     *
     * @param Request $request
     * @return Response
     */
    public function new(Request $request, TranslatorInterface $translator)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a search form for mix
        $mix = new Mix();
        $mix->setCreator($this->getUser());
        $form = $this->createForm(MixType::class, $mix);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them the object is created
        if ($form->isSubmitted() && $form->isValid()) {

            $this->em->persist($mix);
            $this->em->flush();

            //Ajout du mélange dans l'inventaire
            $this->addInvent($mix);
            $message = $translator->trans("Solution created succesfully");
            $this->addFlash('success', $message);
            return $this->redirectToRoute('inventory.mix');
        }

        return $this->render('mix/new.html.twig', [
            'mix' => $mix, //empty object
            'form' => $form->createView(), // search form
        ]);
    }

    public function addInvent(Mix $mix){
        $invent = new Inventory();
        if ($mix->getConfidentiality()){
            $invent->setTitle('Solution confidentielle');
            }
        else $invent->setTitle($mix->getTitle());
        if ($mix->getQuantity()){
            $invent->setQuantity($mix->getQuantity());
        }
        $invent->setMix($mix);
        $invent->setOwner($mix->getCreator());
        $invent->setStorage($mix->getStorage());
        $invent->setQrCode('M'.$mix->getId())
        ;

        $this->em->persist($invent);
        $this->em->flush();
    }



    public function edit(Mix $mix, Request $request, TranslatorInterface $translator)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a form to modify information
        $form = $this->createForm(MixType::class, $mix);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them informations are updated
        if ($form->isSubmitted() && $form->isValid()) {
            $mix->setUpdatedAt(new \Datetime());
            $this->em->flush();
            $message = $translator->trans('Solution modified succefully');
            $this->addFlash('success', $message);

            //Update dans l'inventaire
            $this->updateInvent($mix);

            return $this->redirectToRoute('mix.perso');
        }

        return $this->render('mix/edit.html.twig', [
            'mix' => $mix, // targeted object
            'form' => $form->createView(), // edit form
        ]);
    }

    /**
     * Display the targeted product
     *
     * @Route("/mix/{slug}-{id}", name="mix.show", requirements={"slug": "[a-zA-Z0-9\-]*"})
     * @param [type] $slug
     * @param [type] $id
     * @return Response
     */
    public function show(Mix $mix, string $slug):Response
    {

        // slugify mix title
        if($mix->getSlug() !== $slug){
            return $this->redirectToRoute('mix.show', [
                'id' => $mix->getId(),
                'slug' => $mix->getSlug()
            ], 301);
        }
        $qrCode = new QrCode('M'.$mix->getId());
        $qrCode->setLabel('M'.$mix->getId(), 10);
        $qrCode->setSize(130);
        return $this->render('mix/show.html.twig', [
            'mix' => $mix, // targeted product,
            'qrCode' => $qrCode,
        ]);
    }



    /**
     * Delete option
     *
     * @Route("/mix/{id}", name="rien.delete", methods="DELETE")
     *
     * @param Mix $mix
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(Mix $mix, Request $request, TranslatorInterface $translator)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // analyse the csrf token and if it is valid them the object is deleted
        if ($this->isCsrfTokenValid('delete' . $mix->getId(), $request->get('_token'))) {
            $this->em->remove($mix);
            $this->em->flush();
            $message = $translator->trans('Solution deleted succesfully');
            $this->addFlash('success', $message);
        }
        return $this->redirectToRoute('mix.perso');
    }


    /**
     * Cancel an action in form
     *
     * @Route("/mix/cancel", name="mix.cancel")
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function cancel(TranslatorInterface $translator)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }
        $message = $translator->trans('Changes have not been saved');
        $this->addFlash('warning', $message);

        return $this->redirectToRoute('inventory.mix');
    }
}