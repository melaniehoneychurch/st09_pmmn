<?php

namespace App\Controller\ProductManager;

use App\Entity\Storage;
use App\Form\StorageType;
use App\Repository\StorageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;
use Symfony\Contracts\Translation\TranslatorInterface;


class ProductManagerStorageController extends AbstractController{

    /**
     * @var StorageRepository
     */
    private $storageRep;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var Security
     */
    private $security;

    /**
     * ProductManagerStorageController constructor.
     * @param StorageRepository $storageRep
     * @param EntityManagerInterface $em
     * @param Security $security
     */
    public function __construct(StorageRepository $storageRep, EntityManagerInterface $em, Security $security)
    {
        $this->storageRep = $storageRep;
        $this->em = $em;
        $this->security = $security;
    }

    /**
     * Display the storage manager
     * 
     * @Route("/productmanager/storage", name="productmanager.storage.index")
     *
     * @param PaginatorInterface $paginatorInterface
     * @param Request $request
     * @return Response
     */
    public function index(PaginatorInterface $paginatorInterface, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a paging interface
        $storages = $paginatorInterface->paginate(
            $this->storageRep->findAllOrderQuery(),
            $request->query->getInt('page', 1),
            10
        );
        
        return $this->render('productmanager/storage/index.html.twig', [
            'storages' => $storages, // pictograms list
            
            ]);
    }

    /**
     * Display creation form
     * 
     * @Route("/productmanager/storage/create", name="productmanager.storage.new")
     *
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function new(Request $request, TranslatorInterface $translator)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a creation form
        $storage = new Storage();
        $form = $this->createForm(StorageType::class, $storage);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them the object is created
        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($storage);
            $this->em->flush();
            $message = $translator->trans('Storage created successfully');
            $this->addFlash('success', $message);
            return $this->redirectToRoute('productmanager.storage.index');
        }

        return $this->render('productmanager/storage/new.html.twig', [
            'storage' => $storage, // empty object
            'form' => $form->createView() // creation form
        ]);
    }

    /**
     * Display edit form
     * 
     * @Route("/productmanager/storage/{id}", name="productmanager.storage.edit", methods="GET|POST")
     *
     * @param Storage $storage
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function edit(Storage $storage, Request $request, TranslatorInterface $translator)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a form to modify information
        $form = $this->createForm(StorageType::class, $storage);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them informations are updated
        if ($form->isSubmitted() && $form->isValid()) {
            
            $this->em->flush();
            $message = $translator->trans('Storage modified successfully');
            $this->addFlash('success', $message);
            
            return $this->redirectToRoute('productmanager.storage.index');
        }

        return $this->render('productmanager/storage/edit.html.twig', [
            'storage' => $storage, // targeted object
            'form' => $form->createView(), // edit form
        ]);
    }

    /**
     * Delete option
     * 
     * @Route("/productmanager/storage/{id}", name="productmanager.storage.delete", methods="DELETE")
     *
     * @param storage $storage
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(Storage $storage, Request $request, TranslatorInterface $translator)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        //$products = $this->storageRep->findProductByStorage($storage);

        //check if the storage is used
        if ($storage->getInventories()->count() !== 0){
            $message = $translator->trans('You cannot delete this storage because it currently contains at least one product.');
            $this->addFlash('danger', $message);
            return $this->redirectToRoute('productmanager.storage.index');
        }

        // analyse the csrf token and if it is valid them the object is deleted
        if ($this->isCsrfTokenValid('delete' . $storage->getId(), $request->get('_token'))) {
            $this->em->remove($storage);
            $this->em->flush();
            $message = $translator->trans('Storage deleted successfully');
            $this->addFlash('success', $message);
        }
        return $this->redirectToRoute('productmanager.storage.index');
    }

    /**
     * Cancel an action in form
     * 
     * @Route("/productmanager/cancel/storage", name="productmanager.storage.cancel")
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

        return $this->redirectToRoute('productmanager.storage.index');
    }
    
}