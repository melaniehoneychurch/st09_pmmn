<?php
namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\AdminUserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

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
     */
    public function __construct(UserRepository $repository, EntityManagerInterface $em, UserPasswordEncoderInterface $encoder)
    {
        $this->repository = $repository;
        $this->em = $em;
        $this->encoder = $encoder;
    }

    /**
     * @Route("/admin/users", name="admin.user.index")
     * @return Response
     */
    public function index()
    {
        $users = $this->repository->findAll();
        return $this->render('admin/users/index.html.twig',[
            'users' => $users,
            'current_admin_menu' => 'user',
        ]);
    }

    /**
     * @Route("/admin/users/create", name="admin.user.new")
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function new(Request $request)
    {
        $user = new User();
        $form = $this->createForm(AdminUserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $user->setPassword($this->encoder->encodePassword($user, $user->getPassword()));
            $this->em->persist($user);
            $this->em->flush();
            $this->addFlash('success', 'Bien créé avec succès');
            return $this->redirectToRoute('admin.user.index');
        }

        return $this->render('admin/users/new.html.twig',[
            'user' => $user,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/admin/users/{id}", name="admin.user.edit", methods="GET|POST")
     * @param User $user
     * @param Request $request
     * @return Response
     */
    public function edit(User $user, Request $request)
    {
        $form = $this->createForm(AdminUserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            if($form->get('cancel')->isClicked()){
                $this->addFlash('warning', 'utilisateur non enregistré');

            }else{
            $this->em->flush();
            $this->addFlash('success', 'Bien modifié avec succès');
            }
            return $this->redirectToRoute('admin.user.index');
        }

        return $this->render('admin/users/edit.html.twig',[
            'user' => $user,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/admin/users/{id}", name="admin.user.delete", methods="DELETE")
     * @param User $user
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(User $user, Request $request)
    {
        if($this->isCsrfTokenValid('delete' . $user->getId(),$request->get('_token'))){
            $this->em->remove($user);
            $this->em->flush();
            $this->addFlash('success', 'Bien supprimé avec succès');
            return $this->redirectToRoute('admin.user.index');
        }
    }
    
}