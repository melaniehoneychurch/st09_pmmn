<?php
namespace App\Controller\UserManager;

use App\Entity\User;
use App\Form\UserManagerUserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
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
    public function index()
    {
        $users = $this->repository->findAll();
        return $this->render('usermanager/users/index.html.twig',[
            'users' => $users,
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
            if($form->get('cancel')->isClicked()){
                $this->addFlash('warning', 'utilisateur non enregistré');

            }else{
            $this->em->flush();
            $this->addFlash('success', 'Utilisateur modifié avec succès');
            }
            return $this->redirectToRoute('usermanager.user.index');
        }

        return $this->render('usermanager/users/edit.html.twig',[
            'user' => $user,
            'form' => $form->createView()
        ]);
    }
    
}