<?php
namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\UserSearch;
use App\Form\AdminUserPasswordType;
use App\Form\AdminUserType;
use App\Form\UserSearchType;
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
use Symfony\Contracts\Translation\TranslatorInterface;

class AdminUserController extends AbstractController{

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
     * AdminUserController constructor.
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
     * Display the admin users manager
     * 
     * @Route("/admin/users", name="admin.user.index")
     * @param PaginatorInterface $paginatorInterface
     * @param Request $request
     * @return Response
     */
    public function index(PaginatorInterface $paginatorInterface, Request $request)
    {

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
        
        return $this->render('admin/users/index.html.twig', [
            'users' => $users, // users list
            'form' => $form->createView(), // generate form
        ]);
    }

    /**
     * Display new user form
     * 
     * @Route("/admin/users/create", name="admin.user.new")
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function new(Request $request, TranslatorInterface $translator)
    {
        // generate a form to create a new user
        $user = new User();
        $form = $this->createForm(AdminUserType::class, $user);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them the user is created
        if ($form->isSubmitted() && $form->isValid()){
            $user->setPassword($this->encoder->encodePassword($user, $user->getPassword()));
            $this->em->persist($user);
            $this->em->flush();
            $message = $translator->trans('User created successfully');
            $this->addFlash('success', $message);
            return $this->redirectToRoute('admin.user.index');
        }

        return $this->render('admin/users/new.html.twig',[
            'user' => $user, // empty user object
            'form' => $form->createView() // user creation form
        ]);
    }

    /**
     * Display edit user form
     * 
     * @Route("/admin/users/{id}", name="admin.user.edit", methods="GET|POST")
     * @param User $user
     * @param Request $request
     * @return Response
     */
    public function edit(User $user, Request $request, TranslatorInterface $translator)
    {
        // generate a form to modify user information
        $form = $this->createForm(AdminUserType::class, $user);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them the user is updated
        if ($form->isSubmitted() && $form->isValid()){
            $this->em->flush();
            $message = $translator->trans('User modified succefully');
            $this->addFlash('success', $message);
            return $this->redirectToRoute('admin.user.index');
        }

        return $this->render('admin/users/edit.html.twig',[
            'user' => $user, // targeted user
            'form' => $form->createView() // edit form
        ]);
    }

    /**
     * Display edit password form
     * 
     * @Route("/admin/users/{id}/password", name="admin.user.editpassword", methods="GET|POST")
     * @param User $user
     * @param Request $request
     * @return Response
     */
    public function editPassword(User $user, Request $request, TranslatorInterface $translator)
    {
        // generate a form to modify user password
        $form = $this->createForm(AdminUserPasswordType::class, $user);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them the user password is updated
        if ($form->isSubmitted() && $form->isValid()){
            $user->setPassword($this->encoder->encodePassword($user, $user->getPassword()));
            $this->em->flush();
            $message = $translator->trans('Password modified successfully');
            $this->addFlash('success', $message);
            return $this->redirectToRoute('admin.user.index');
        }

        return $this->render('admin/users/edit_password.html.twig',[
            'user' => $user, // targeted user
            'form' => $form->createView() // generate form
        ]);
    }

    /**
     * Delete user
     * 
     * @Route("/admin/users/{id}", name="admin.user.delete", methods="DELETE")
     * @param User $user
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(User $user, Request $request, TranslatorInterface $translator)
    {
        // analyse the csrf token and if it is valid them the user is deleted
        if($this->isCsrfTokenValid('delete' . $user->getId(),$request->get('_token'))){
            $this->em->remove($user);
            $this->em->flush();
            $message = $translator->trans('User deleted successfully');
            $this->addFlash('success', $message);
            return $this->redirectToRoute('admin.user.index');
        }
    }

    /**
     * Cancel an action in form
     *
     * @Route("/admin/cancel/users", name="admin.user.cancel")
     *
     * @param TranslatorInterface $translator
     * @return RedirectResponse
     */
    public function cancel(TranslatorInterface $translator)
    {
        $message = $translator->trans('Changes have not been saved');
        $this->addFlash('warning', $message);

        return $this->redirectToRoute('admin.user.index');
    }
    
}