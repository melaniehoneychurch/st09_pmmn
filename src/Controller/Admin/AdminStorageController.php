<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\StorageType;
use App\Entity\Storage;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\StorageRepository;
use Symfony\Component\HttpFoundation\Request;


class AdminStorageController extends AbstractController{

    public function __construct(StorageRepository $storageRep, EntityManagerInterface $em)
    {
        $this->storageRep = $storageRep;
        $this->em = $em;
    }

    /**
     * @Route("/admin/storage", name="admin.storage.index")
     *
     * @return void
     */
    public function index()
    {
        $storages = $this->storageRep->findAll();

        return $this->render('admin/storage/index.html.twig', [
            'storages' => $storages,
            'current_admin_menu' => 'storage',
        ]);
    }

    /**
     * @Route("/admin/storage/create", name="admin.storage.new")
     *
     * @return void
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
            return $this->redirectToRoute('admin.storage.index');
        }

        return $this->render('admin/storage/new.html.twig', [
            'storage' => $storage,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/admin/storage/{id}", name="admin.storage.edit", methods="GET|POST")
     *
     * @return void
     */
    public function edit(Storage $storage, Request $request)
    {

        $form = $this->createForm(StorageType::class, $storage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if($form->get('cancel')->isClicked()){
                $this->addFlash('warning', 'Stockage non enregistré');

            }else{
            $this->em->flush();
            $this->addFlash('success', 'Stockage modifié avec succès');
            }
            return $this->redirectToRoute('admin.storage.index');
        }

        return $this->render('admin/storage/edit.html.twig', [
            'storage' => $storage,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/storage/{id}", name="admin.storage.delete", methods="DELETE")
     *
     * @param storage $storage
     * @return void
     */
    public function delete(Storage $storage, Request $request)
    {

        if ($this->isCsrfTokenValid('delete' . $storage->getId(), $request->get('_token'))) {
            $this->em->remove($storage);
            $this->em->flush();
            $this->addFlash('success', 'Stockage supprimé avec succès');
        }
        return $this->redirectToRoute('admin.storage.index');
    }
}