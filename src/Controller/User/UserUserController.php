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
use Symfony\Contracts\Translation\TranslatorInterface;

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
     * Display user informations
     * 
     * @Route("/user", name="user.show")
     * @return Response
     */
    public function show()
    {
        $user = $this->security->getUser();
        return $this->render('user/show.html.twig', [
            'user' => $user // logged user
        ]);
    }

    /**
     * Edit user information
     * 
     * @Route("/user/edit", name="user.edit", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function edit(Request $request, TranslatorInterface $translator)
    {
        // generate a form to modify information
        $user = $this->security->getUser();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them informations are updated
        if ($form->isSubmitted() && $form->isValid()){
            $this->em->flush();
            $message = $translator->trans("Informations modified succesfully");
            $this->addFlash('success', $message);
            return $this->redirectToRoute('user.show');
        }

        return $this->render('user/edit.html.twig',[
            'user' => $user, // logged user
            'form' => $form->createView() // edit form
        ]);
    }

    /**
     * Display edit password form
     * 
     * @Route("/user/editpassword", name="user.editpassword", methods="GET|POST")
     * @param Request $request
     * @return Response
     */
    public function editPassword(Request $request, TranslatorInterface $translator)
    {
        // generate a form to modify user password
        $user = $this->security->getUser();
        $form = $this->createForm(UserPasswordType::class, $user);
        $form->handleRequest($request);

        // analyse the form response and if the form is valid them informations are updated
        if ($form->isSubmitted() && $form->isValid()){
            $user->setPassword($this->encoder->encodePassword($user, $user->getPassword()));
            $this->em->flush();
            $message = $translator->trans('Password modified succesfully');
            $this->addFlash('success', $message);
            return $this->redirectToRoute('user.show');
        }

        return $this->render('user/edit_password.html.twig',[
            'user' => $user, // logged user
            'form' => $form->createView() // edit form
        ]);
    }

    /**
     * Cancel an action in form
     * 
     * @Route("user/cancel", name="user.cancel")
     *
     * @return RedirectResponse
     */
    public function cancel(TranslatorInterface $translator)
    {
        $message = $translator->trans('Changes have not been saved');
        $this->addFlash('warning', $message);

        return $this->redirectToRoute('user.show');
    }
    
}