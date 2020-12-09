<?php
/**
 * This file is part of the PhpCAS Guard Bundle.
 *
 * PHP version 7.1 | 7.2
 *
 * (c) Alexandre Tranchant <alexandre.tranchant@gmail.com>
 *
 * @category  Entity
 *
 * @author    Alexandre Tranchant <alexandre.tranchant@gmail.com>
 * @license   MIT
 *
 * @see       https://github.com/Alexandre-T/casguard/blob/master/LICENSE
 */

namespace App\Security;

use phpCAS;
use App\Controller\AnonymeController;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Guard\AbstractGuardAuthenticator;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

/**
 * \class UtilisateurCASAuthenticator
 * \brief L'authenticateur CAS, d'Alexandre Tranchant que j'ai remanié
 *
 *
 * @author   Alexandre Tranchant <alexandre.tranchant@gmail.com>, Ivann LARUELLE <ivann.laruelle@gmail.com>
 * @license  MIT
 */
class UtilisateurCASAuthenticator extends AbstractGuardAuthenticator
{
    /**
     * \brief On en a besoin pour construire un UtilisateurCAS
     *
     * @see App::Model::UtilisateurCAS
     *
     * @var EntityManagerInterface $entityManager
     */
    private $entityManager;

    /** @var UrlGeneratorInterface */
    private $urlGenerator;

    /**
     * \brief Nécessaire pour récupérer le dossier du projet, et le chemin du certificat du CAS
     *
     * @var KernelInterface
     */
    private $kernel;

    /**
     * UtilisateurCASAuthenticator constructor.
     *
     * @param EntityManagerInterface $entityManager autowiré
     * @param UrlGeneratorInterface  $urlGenerator  autowiré
     * @param KernelInterface        $kernel        autowiré
     */
    public function __construct(EntityManagerInterface $entityManager, UrlGeneratorInterface $urlGenerator,
                                KernelInterface $kernel)
    {
        $this->entityManager = $entityManager;
        $this->urlGenerator  = $urlGenerator;
        $this->kernel        = $kernel;
    }

    /**
     * \brief Récupère l'identifiant CAS d'un user (redirige vers le CAS si besoin)
     *
     * \details Called on every request. Return whatever credentials you want, or null to stop authentication.
     *
     * @param Request $request
     *
     * @return null|string
     */
    public function getCredentials(Request $request)
    {
        //dd(phpCAS);
        //phpCAS::setDebug();
        phpCAS::setVerbose(false);
        if ( !phpCAS::isInitialized()) {
            phpCAS::client(
                CAS_VERSION_2_0,
                "cas.utt.fr",
                443,
                "/cas"
            );
        }
        //phpCAS::setLang(CAS_Languages_French);

        phpCAS::setCasServerCACert($this->kernel->getProjectDir() . "/utt-cas-chain.pem", true);
        //phpCAS::setNoCasServerValidation(); DANGER !!!

        /* @see https://github.com/Alexandre-T/casguard/issues/5 */
        /* @see https://github.com/symfony/monolog-bundle/commit/ab76969308496917175374ac734d474733c59757
         * if (!empty($allowedClients)) {
         * phpCAS::handleLogoutRequests($this->cas->isHandleLogoutRequest(), $allowedClients);
         * } else {
         * phpCAS::handleLogoutRequests($this->cas->isHandleLogoutRequest());
         * }
         * }*/

        phpCAS::forceAuthentication();

        // Return User
        if (phpCAS::getUser()) {
            return phpCAS::getUser();
        }

        return NULL;
    }

    /**
     * \brief Retourne directement un utilisateur via l'utilisateur provider
     *
     * @param string                $credentials  l'uuid
     * @param UserProviderInterface $userProvider @see App::Security::UtilisateurCASProvider
     *
     * @return null|UserInterface
     */
    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        return $userProvider->loadUserByUsername($credentials);
    }

    /**
     *
     * \brief Vérifie les identifiants
     * \details Regarde si l'utilisateur a le même uuid que celui en cours dans phpCAS
     *
     * @param mixed         $credentials l'uuid
     * @param UserInterface $user        @see App::Model::UtilisateurCAS
     *
     * @return bool true
     */
    public function checkCredentials($credentials, UserInterface $user)
    {
        //return true;
        return $user->getUsername() === phpCAS::getUser() && $credentials === phpCAS::getUser();
    }

    /**
     * \brief Enregistre les attributs CAS dans un token et laisse la requête se poursuivre
     *
     * Called when authentication executed and was successful!
     *
     * This should return the Response sent back to the user, like a
     * RedirectResponse to the last page they visited.
     *
     * If you return null, the current request will continue, and the user
     * will be authenticated. This makes sense, for example, with an API.
     *
     * @param Request        $request
     * @param TokenInterface $token
     * @param string         $providerKey The provider (i.e. firewall) key
     *
     * @return Response|null
     */
    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
    {
        if (phpCAS::isInitialized()) {
            $token->setAttributes(phpCAS::getAttributes());
        }
        return NULL;
    }

    /**
     * Called when authentication executed, but failed (e.g. wrong username password).
     *
     * This should return the Response sent back to the user, like a
     * RedirectResponse to the login page or a 403 response.
     *
     * If you return null, the request will continue, but the user will
     * not be authenticated. This is probably not what you want to do.
     *
     * @param Request                 $request
     * @param AuthenticationException $exception
     *
     * @return Response|null
     */
    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        $data = array(
            'message' => strtr($exception->getMessageKey(), $exception->getMessageData()),
        );

        return new JsonResponse($data, 403);
    }

    /**
     * \brief Cette fonction n'est jamais appellée (entrypoint utilisateur admis)
     *
     * Called when authentication is needed, but it's not sent.
     *
     * @param Request                      $request
     * @param AuthenticationException|null $authException
     *
     * @return RedirectResponse
     */
    public function start(Request $request, AuthenticationException $authException = NULL)
    {
        //The URL have to be completed by the current request uri,
        // because Cas Server need to know where redirect user after authentication.
        return new RedirectResponse("https://cas.utt.fr/cas/login?service=" . $this->getLoginUrl());
    }

    /**
     * Generate the Login URL in router.
     *
     * @return string
     */
    protected function getLoginUrl()
    {
        return $this->urlGenerator->generate('anonyme_cas_login');
    }

    /**
     * \brief Renvoie non, car le CAS gère déjà ça
     *
     * @return bool
     */
    public function supportsRememberMe()
    {
        return false;
    }

    /**
     * \brief Ne fait rien
     *
     * Logout and redirect to home page.
     *
     * @param Request $request
     *
     * public function onLogoutSuccess(Request $request)
    * {
        * /*phpCAS::setDebug($this->cas->getDebug());
        * phpCAS::setVerbose($this->cas->isVerbose());
        * if (!phpCAS::isInitialized()) {
            * phpCAS::client(
                * $this->cas->getVersion(),
                * $this->cas->getHostname(),
                * $this->cas->getPort(),
                * $this->cas->getUrl()
            * );
        * }
        * phpCAS::setLang($this->cas->getLanguage());
     *
     * if ($this->cas->isRedirectingAfterLogout()) {
     * $uri = $this->router->generate(
     * $this->cas->getRouteLogout(),
     * [],
     * UrlGeneratorInterface::ABSOLUTE_URL
     * );
     * phpCAS::logoutWithRedirectService($uri);
     * } else {
     * //simple logout
     * phpCAS::logout();
        * }*
    * } */

    /**
     * \brief Renvoie true seulement sur la page du cas
     *
     * @param Request $request
     *
     * @return bool
     * @see AnonymeController::cas()
     *
     */
    public function supports(Request $request)
    {
        return 'anonyme_cas_login' === $request->attributes->get('_route');
    }

    /**
     * Generate the default Success redirect url.
     *
     * @return string
     */
    protected function getDefaultSuccessRedirectUrl()
    {
        return $this->urlGenerator->generate('anonyme_user_index');
    }
}