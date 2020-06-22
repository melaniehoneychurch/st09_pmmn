<?php
namespace App\Controller\User;

use App\Form\UserPasswordType;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\Persistence\ObjectManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Security;

class UserUserController extends AbstractController{

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
     * AdminUserController constructor.
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
     * @Route("/user", name="user.show")
     * @return Response
     */
    public function show()
    {
        $user = $this->security->getUser();
        return $this->render('user/show.html.twig', [
            'user' => $user
        ]);
    }

    /**
     * @Route("/user/edit", name="user.edit", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function edit(Request $request)
    {
        $user = $this->security->getUser();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $this->em->flush();
            $this->addFlash('success', 'Informations modifiées avec succès');
            return $this->redirectToRoute('user.show');
        }

        return $this->render('user/edit.html.twig',[
            'user' => $user,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/user/editpassword", name="user.editpassword", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function editPassword(Request $request)
    {
        $user = $this->security->getUser();
        $form = $this->createForm(UserPasswordType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $user->setPassword($this->encoder->encodePassword($user, $user->getPassword()));
            $this->em->flush();
            $this->addFlash('success', 'Mot de passe modifié avec succès');
            return $this->redirectToRoute('user.show');
        }

        return $this->render('user/edit_password.html.twig',[
            'user' => $user,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("user/cancel", name="user.cancel")
     *
     * @return RedirectResponse
     */
    public function cancel()
    {
        $this->addFlash('warning', 'Modifications non enregistrées');

        return $this->redirectToRoute('user.show');
    }
    
}