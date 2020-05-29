<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\HazardStatementType;
use App\Entity\HazardStatement;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\HazardStatementRepository;
use Symfony\Component\HttpFoundation\Request;


class AdminHazardStatementController extends AbstractController{

    public function __construct(HazardStatementRepository $hazardStatementRep, EntityManagerInterface $em)
    {
        $this->hazardStatementRep = $hazardStatementRep;
        $this->em = $em;
    }

    /**
     * @Route("/admin/hazardStatement", name="admin.hazardStatement.index")
     *
     * @return void
     */
    public function index()
    {
        $hazardStatements = $this->hazardStatementRep->findAll();

        return $this->render('admin/hazardStatement/index.html.twig', [
            'hazardStatements' => $hazardStatements,
            'current_admin_menu' => 'hazardStatement',
        ]);
    }

    /**
     * @Route("/admin/hazardStatement/create", name="admin.hazardStatement.new")
     *
     * @return void
     */
    public function new(Request $request)
    {
        $hazardStatement = new HazardStatement();

        $form = $this->createForm(HazardStatementType::class, $hazardStatement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($hazardStatement);
            $this->em->flush();
            $this->addFlash('success', 'mention de danger créé avec succès');
            return $this->redirectToRoute('admin.hazardStatement.index');
        }

        return $this->render('admin/hazardStatement/new.html.twig', [
            'hazardStatement' => $hazardStatement,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/admin/hazardStatement/{id}", name="admin.hazardStatement.edit", methods="GET|POST")
     *
     * @return void
     */
    public function edit(HazardStatement $hazardStatement, Request $request)
    {

        $form = $this->createForm(HazardStatementType::class, $hazardStatement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->flush();
            $this->addFlash('success', 'mention de danger modifié avec succès');
            return $this->redirectToRoute('admin.hazardStatement.index');
        }

        return $this->render('admin/hazardStatement/edit.html.twig', [
            'hazardStatement' => $hazardStatement,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/hazardStatement/{id}", name="admin.hazardStatement.delete", methods="DELETE")
     *
     * @param hazardStatement $hazardStatement
     * @return void
     */
    public function delete(HazardStatement $hazardStatement, Request $request)
    {

        if ($this->isCsrfTokenValid('delete' . $hazardStatement->getId(), $request->get('_token'))) {
            $this->em->remove($hazardStatement);
            $this->em->flush();
            $this->addFlash('success', 'mention de danger supprimé avec succès');
        }
        return $this->redirectToRoute('admin.hazardStatement.index');
    }
}