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


class ProductManagerStorageController extends AbstractController{

    /**
     * @var StorageRepository
     */
    private $storageRep;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    public function __construct(StorageRepository $storageRep, EntityManagerInterface $em)
    {
        $this->storageRep = $storageRep;
        $this->em = $em;
    }

    /**
     * @Route("/productmanager/storage", name="productmanager.storage.index")
     *
     * @return Response
     */
    public function index(PaginatorInterface $paginatorInterface, Request $request)
    {
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
     * @return RedirectResponse
     */
    public function cancel(Request $request)
    {

        $this->addFlash('warning', 'Stockage non enregistré');

        return $this->redirectToRoute('productmanager.storage.index');
    }
    
}