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
use Symfony\Component\Security\Core\Security;
use Symfony\Contracts\Translation\TranslatorInterface;

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
     * @var Security
     */
    private $security;

    /**
     * UserManagerUserController constructor.
     * @param UserRepository $repository
     * @param EntityManagerInterface $em
     * @param UserPasswordEncoderInterface $encoder
     * @param Security $security
     */
    public function __construct(UserRepository $repository, EntityManagerInterface $em, UserPasswordEncoderInterface $encoder, Security $security)
    {
        $this->repository = $repository;
        $this->em = $em;
        $this->encoder = $encoder;
        $this->security = $security;
    }

    /**
     * Display the users manager
     * 
     * @Route("/usermanager/users", name="usermanager.user.index")
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

        // generate a search form for users
        $search = new UserSearch();
        $form = $this->createForm(UserSearchType::class, $search);
        $form->handleRequest($request);

        // generate a paging interface for users
        $users = $paginatorInterface->paginate(
            $this->repository->findSearchedQuery($search),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('usermanager/users/index.html.twig', [
            'users' => $users, // users list
            'form' => $form->createView(), // generate form
        ]);
    }

    /**
     * Display new user form
     * 
     * @Route("/usermanager/users/create", name="usermanager.user.new")
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function new(Request $request, TranslatorInterface $translator)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a form to create a new user
        $user = new User();
        $form = $this->createForm(UserManagerUserType::class, $user);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them the user is created
        if ($form->isSubmitted() && $form->isValid()){
            $user->setPassword($this->encoder->encodePassword($user, $user->getPassword()));
            $this->em->persist($user);
            $this->em->flush();
            $message = $translator->trans('User created successfully');
            $this->addFlash('success', $message);
            return $this->redirectToRoute('usermanager.user.index');
        }

        return $this->render('usermanager/users/new.html.twig',[
            'user' => $user, // empty user object
            'form' => $form->createView() // user creation form
        ]);
    }

    /**
     * Display edit user form
     * 
     * @Route("/usermanager/users/{id}", name="usermanager.user.edit", methods="GET|POST")
     * @param User $user
     * @param Request $request
     * @return Response
     */
    public function edit(User $user, Request $request, TranslatorInterface $translator)
    {
        // check if the user account is activate
        if (!$this->security->getUser()->getActivate() && !$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Accès refusé, compte désactivé');
        }

        // generate a form to modify user information
        $form = $this->createForm(UserManagerUserType::class, $user);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them the user is updated
        if ($form->isSubmitted() && $form->isValid()){
            $this->em->flush();
            $message = $translator->trans('User modified successfully');
            $this->addFlash('success', $message);
            
            return $this->redirectToRoute('usermanager.user.index');
        }

        return $this->render('usermanager/users/edit.html.twig',[
            'user' => $user, // targeted user
            'form' => $form->createView() // edit form
        ]);
    }

    /**
     * Cancel an action in form
     * 
     * @Route("/usermanager/cancel/users", name="usermanager.user.cancel")
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
        $this->addFlash('warning', 'Utilisateur non enregistré');

        return $this->redirectToRoute('usermanager.user.index');
    }
    
}