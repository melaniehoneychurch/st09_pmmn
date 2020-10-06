<?php

namespace App\Controller\User;

use App\Entity\Product;
use App\Entity\Recipe;
use App\Form\RecipeType;
use App\Form\ProductSearchType;
use App\Entity\RecipeSearch;
use App\Form\RecipeSearchType;
use App\Repository\ProductRepository;
use App\Repository\RecipeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;


class UserRecipeController extends AbstractController{

    /**
     * @var RecipeRepository
     */
    private $recipeRep;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var Security
     */
    private $security;

    /**
     * UserRecipeController constructor.
     * @param RecipeRepository $recipeRep
     * @param EntityManagerInterface $em
     * @param Security $security
     */
    public function __construct(RecipeRepository $recipeRep, EntityManagerInterface $em, Security $security)
    {
        $this->recipeRep=$recipeRep;
        $this->em = $em;
        $this->security = $security;
    }

    /**
     * Display the user
     *
     * @Route("/recipe", name="recipe.index")
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

        // generate a search form for recipe
        $search = new RecipeSearch();
        $form = $this->createForm(RecipeSearchType::class, $search);
        $form->handleRequest($request);

        // generate a paging interface
        $recipes = $paginatorInterface->paginate(
            $this->recipeRep->findSearchedQuery($search),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('recipe/index.html.twig', [
            'recipes' => $recipes, // recipes list
            'form' => $form->createView(), // search form
        ]);
    }

    /**
     *
     * @Route("/recipe/myrecipes", name="recipe.perso")
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
        $search = new RecipeSearch();
        $form = $this->createForm(RecipeSearchType::class, $search);
        $form->handleRequest($request);

        // generate a paging interface
        $recipes = $paginatorInterface->paginate(
            $this->recipeRep->findPersoSearchedQuery($search),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('recipe/perso.html.twig', [
            'recipes' => $recipes, // recipes list
            'form' => $form->createView(), // search form
        ]);
    }

    /**
     * Display creation form
     *
     * @Route("/recipe/create", name="recipe.new")
     *
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function new(Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a creation form
        $recipe = new Recipe();
        $form = $this->createForm(RecipeType::class, $recipe);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them the object is created
        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($recipe);
            $this->em->flush();
            $this->addFlash('success', 'Recette créée avec succès');
            return $this->redirectToRoute('recipe.index');
        }

        return $this->render('recipe/new.html.twig', [
            'recipe' => $recipe, // empty object
            'recipeForm' => $form->createView() // creation form
        ]);
    }

    /**
     * Display edit form
     *
     * @Route("/recipe/{id}", name="recipe.edit", methods="GET|POST")
     *
     * @param Recipe $recipe
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function edit(Recipe $recipe, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a form to modify information
        $form = $this->createForm(RecipeType::class, $recipe);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them informations are updated
        if ($form->isSubmitted() && $form->isValid()) {

            //$recipe->setUpdatedAt(new \Datetime());

            $this->em->flush();
            $this->addFlash('success', 'recette modifiée avec succès');

            return $this->redirectToRoute('recipe.index');
        }

        return $this->render('recipe/edit.html.twig', [
            'recipe' => $recipe, // targeted object
            'form' => $form->createView(), // edit form
        ]);
    }

    /**
     * Delete option
     *
     * @Route("/recipe/{id}", name="recipe.delete", methods="DELETE")
     *
     * @param recipe $recipe
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(Recipe $recipe, Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // analyse the csrf token and if it is valid them the object is deleted
        if ($this->isCsrfTokenValid('delete' . $recipe->getId(), $request->get('_token'))) {
            $this->em->remove($recipe);
            $this->em->flush();
            $this->addFlash('success', 'Recette supprimée avec succès');
        }
        return $this->redirectToRoute('recipe.index');
    }

   /**
     * Cancel an action in form
     *
     * @Route("/productmanager/cancel/product", name="productmanager.product.cancel")
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function cancel(Request $request)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        $this->addFlash('warning', 'recette non enregistrée');

        return $this->redirectToRoute('recipe.index');
    }
}