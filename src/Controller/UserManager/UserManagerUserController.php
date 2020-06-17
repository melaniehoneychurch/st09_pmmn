<?php
namespace App\Controller\UserManager;

use App\Entity\User;
use App\Entity\UserSearch;
use App\Form\UserSearchType;
use App\Form\UserManagerUserType;
use App\Repository\UserRepository;
use Doctrine\Persistence\ObjectManager;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserManagerUserController extends AbstractController{

    /**
     * @var UserRepository
     */
    private $repository;

    /**
     * @var ObjectManager
     */
    private $em;

    /**
     *
     * @var UserPasswordEncoderInterface
     */
    private $encoder;

    /**
     * UserManagerUserController constructor.
     * @param UserRepository $repository
     * @param EntityManagerInterface $em
     * @param UserPasswordEncoderInterface $encoder
     */
    public function __construct(UserRepository $repository, EntityManagerInterface $em, UserPasswordEncoderInterface $encoder)
    {
        $this->repository = $repository;
        $this->em = $em;
        $this->encoder = $encoder;
    }

    /**
     * @Route("/usermanager/users", name="usermanager.user.index")
     * @return Response
     */
    public function index(PaginatorInterface $paginatorInterface, Request $request)
    {
        $search = new UserSearch();
        $form = $this->createForm(UserSearchType::class, $search);
        $form->handleRequest($request);

        $users = $paginatorInterface->paginate(
            $this->repository->findSearchedQuery($search),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('usermanager/users/index.html.twig', [
            'users' => $users,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/usermanager/users/create", name="usermanager.user.new")
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function new(Request $request)
    {
        $user = new User();
        $form = $this->createForm(UserManagerUserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $user->setPassword($this->encoder->encodePassword($user, $user->getPassword()));
            $this->em->persist($user);
            $this->em->flush();
            $this->addFlash('success', 'Utilisateur créé avec succès');
            return $this->redirectToRoute('usermanager.user.index');
        }

        return $this->render('usermanager/users/new.html.twig',[
            'user' => $user,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/usermanager/users/{id}", name="usermanager.user.edit", methods="GET|POST")
     * @param User $user
     * @param Request $request
     * @return Response
     */
    public function edit(User $user, Request $request)
    {
        $form = $this->createForm(UserManagerUserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $this->em->flush();
            $this->addFlash('success', 'Utilisateur modifié avec succès');
            
            return $this->redirectToRoute('usermanager.user.index');
        }

        return $this->render('usermanager/users/edit.html.twig',[
            'user' => $user,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/usermanager/cancel/users", name="usermanager.user.cancel")
     *
     * @return RedirectResponse
     */
    public function cancel(Request $request)
    {

        $this->addFlash('warning', 'Utilisateur non enregistré');

        return $this->redirectToRoute('usermanager.user.index');
    }
    
}