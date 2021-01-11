<?php

namespace App\Model;

use Serializable;
use App\Entity\User;
use App\Controller\SecurityController;
use Doctrine\ORM\EntityManagerInterface;
use App\Security\UtilisateurCASProvider;
use App\Security\UtilisateurCASAuthenticator;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * \class UtilisateurCAS
 *
 * @author  Ivann LARUELLE <ivann.laruelle@gmail.com>
 *
 * \brief Décrit un utilisateur connecté par le CAS
 *
 * @see     SecurityController::cas()
 * @see     UtilisateurCASAuthenticator
 * @see     UtilisateurCASProvider
 *
 * @package App\Model
 */
class UtilisateurCAS implements UserInterface, Serializable
{
    /**
     * \brief L'identifiant de session de l'utilisateur concerné
     *
     * @Assert\NotBlank()
     */
    private $uuid;

    /**
     * \brief Utilisé pour récupérer les droits
     * \warning N'EST PAS AUTOWIRE !
     *
     * @var EntityManagerInterface $entityManager
     */
    private $entityManager;

    /**
     * \brief Le rôle admin est donné dès la construction de l'objet
     *
     * @var string[] $roles
     */
    private $roles = [];

    /**
     * UtilisateurCAS constructor.
     *
     * @param string                 $uuid          l'identifiant de session
     * @param EntityManagerInterface $entityManager un entitymanager (n'est pas autowiré !!)
     *
     * @see UtilisateurCASAuthenticator
     *
     */
    public function __construct($uuid, EntityManagerInterface $entityManager)
    {
        $this->uuid          = $uuid;
        $this->entityManager = $entityManager;
        $this->roles         = array('ROLE_USER', 'ROLE_LOCATAIRE', 'ROLE_CAS');
        if ($this->entityManager->getRepository(User::class)->findOneBy(["uuid" => $uuid, "actif" => true])) {
            $this->roles = array_merge($this->roles, array("ROLE_ADMIN"));
        }
    }

    public function getUuid() : ?string
    {
        return $this->uuid;
    }

    public function setUuid(string $uuid) : self
    {
        $this->uuid = $uuid;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword()
    {
        // not needed for apps that do not check user passwords
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed for apps that do not check user passwords
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername() : string
    {
        return (string) $this->uuid;
    }

    /**
     * @see UserInterface
     */
    public function getRoles() : array
    {
        return array_unique($this->roles);
    }

    public function setRoles(array $roles) : self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * \brief On désérialize nous même l'utilisateur depuis la session
     * \details On récupére l'uuid et les rôles
     * \note L'entity manager ne peut être sérializé
     *
     * @inheritDoc
     */
    public function unserialize($serialized)
    {
        list (
            $this->uuid,
            $this->roles,
            ) = unserialize($serialized);
    }

    /**
     * \brief On sérialise nous même l'utilisateur dans la session
     * \details On sérialize l'uuid et les rôles
     * \note L'entity manager ne peut être sérializé
     *
     * @inheritDoc
     */
    public function serialize()
    {
        return serialize(array(
                             $this->getUsername(),
                             $this->getRoles(),
                         ));
    }
}
