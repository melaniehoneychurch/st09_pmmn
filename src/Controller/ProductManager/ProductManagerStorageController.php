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
     * @Route("/productmanager/storage", name="productmanager.storage.index")
     *
     * @param PaginatorInterface $paginatorInterface
     * @param Request $request
     * @return Response
     */
    public function index(PaginatorInterface $paginatorInterface, Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $storages = $paginatorInterface->paginate(
            $this->storageRep->findAllOrderQuery(),
            $request->query->getInt('page', 1),
            10
        );
        
        return $this->render('productmanager/storage/index.html.twig', [
            'storages' => $storages,
            
            ]);
    }

    /**
     * @Route("/productmanager/storage/create", name="productmanager.storage.new")
     *
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function new(Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $storage = new Storage();

        $form = $this->createForm(StorageType::class, $storage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($storage);
            $this->em->flush();
            $this->addFlash('success', 'Stockage créé avec succès');
            return $this->redirectToRoute('productmanager.storage.index');
        }

        return $this->render('productmanager/storage/new.html.twig', [
            'storage' => $storage,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/productmanager/storage/{id}", name="productmanager.storage.edit", methods="GET|POST")
     *
     * @param Storage $storage
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function edit(Storage $storage, Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $form = $this->createForm(StorageType::class, $storage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
            $this->em->flush();
            $this->addFlash('success', 'Stockage modifié avec succès');
            
            return $this->redirectToRoute('productmanager.storage.index');
        }

        return $this->render('productmanager/storage/edit.html.twig', [
            'storage' => $storage,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/productmanager/storage/{id}", name="productmanager.storage.delete", methods="DELETE")
     *
     * @param storage $storage
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(Storage $storage, Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        if ($this->isCsrfTokenValid('delete' . $storage->getId(), $request->get('_token'))) {
            $this->em->remove($storage);
            $this->em->flush();
            $this->addFlash('success', 'Stockage supprimé avec succès');
        }
        return $this->redirectToRoute('productmanager.storage.index');
    }

    /**
     * @Route("/productmanager/cancel/storage", name="productmanager.storage.cancel")
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function cancel(Request $request)
    {
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $this->addFlash('warning', 'Stockage non enregistré');

        return $this->redirectToRoute('productmanager.storage.index');
    }
    
}