<?php

namespace App\Controller\ProductManager;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\HazardStatementType;
use App\Entity\HazardStatement;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\HazardStatementRepository;
use Symfony\Component\HttpFoundation\Request;


class ProductManagerHazardStatementController extends AbstractController{

    /**
     * @var HazardStatementRepository
     */
    private $hazardStatementRep;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    public function __construct(HazardStatementRepository $hazardStatementRep, EntityManagerInterface $em)
    {
        $this->hazardStatementRep = $hazardStatementRep;
        $this->em = $em;
    }

    /**
     * @Route("/productmanager/hazardStatement", name="productmanager.hazardStatement.index")
     *
     * @return HttpFoundationResponse
     */
    public function index()
    {
        $hazardStatements = $this->hazardStatementRep->findAll();

        return $this->render('productmanager/hazardStatement/index.html.twig', [
            'hazardStatements' => $hazardStatements,
        ]);
    }

    /**
     * @Route("/productmanager/hazardStatement/create", name="productmanager.hazardStatement.new")
     *
     * @param Request $request
     * @return RedirectResponse|HttpFoundationResponse
     */
    public function new(Request $request)
    {
        $hazardStatement = new HazardStatement();

        $form = $this->createForm(HazardStatementType::class, $hazardStatement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($hazardStatement);
            $this->em->flush();
            $this->addFlash('success', 'Mention de danger créée avec succès');
            return $this->redirectToRoute('productmanager.hazardStatement.index');
        }

        return $this->render('productmanager/hazardStatement/new.html.twig', [
            'hazardStatement' => $hazardStatement,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/productmanager/hazardStatement/{id}", name="productmanager.hazardStatement.edit", methods="GET|POST")
     *
     * @param HazardStatement $hazardStatement
     * @param Request $request
     * @return RedirectResponse|HttpFoundationResponse
     */
    public function edit(HazardStatement $hazardStatement, Request $request)
    {

        $form = $this->createForm(HazardStatementType::class, $hazardStatement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if($form->get('cancel')->isClicked()){
                $this->addFlash('warning', 'Mention de danger non enregistré');

            }else{
                $this->em->flush();
                $this->addFlash('success', 'mention de danger modifié avec succès');
            }
            return $this->redirectToRoute('productmanager.hazardStatement.index');
        }

        return $this->render('productmanager/hazardStatement/edit.html.twig', [
            'hazardStatement' => $hazardStatement,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/productmanager/hazardStatement/{id}", name="productmanager.hazardStatement.delete", methods="DELETE")
     *
     * @param hazardStatement $hazardStatement
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(HazardStatement $hazardStatement, Request $request)
    {

        if ($this->isCsrfTokenValid('delete' . $hazardStatement->getId(), $request->get('_token'))) {
            $this->em->remove($hazardStatement);
            $this->em->flush();
            $this->addFlash('success', 'Mention de danger supprimée avec succès');
        }
        return $this->redirectToRoute('productmanager.hazardStatement.index');
    }
}