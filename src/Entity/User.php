<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;


/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User implements UserInterface, \Serializable
{

    const allRoles = array(
        'ROLE_ADMIN',
        'ROLE_ACCOUNT_MANAGER',
        'ROLE_REPORT_MANAGER',
        'ROLE_PRODUCT_MANAGER',
        'ROLE_USER'
    );

    const rolesToNames = array(
        'ROLE_ADMIN' => 'Administrateur',
        'ROLE_ACCOUNT_MANAGER' => 'Gérant des comptes',
        'ROLE_REPORT_MANAGER' => 'Gérant des rapports',
        'ROLE_PRODUCT_MANAGER' => 'Gérant des produits',
        'ROLE_USER' => 'Utilisateur'
    );

    const namesToRoles = array(
        'Administrateur' => 'ROLE_ADMIN',
        'Gérant des comptes' => 'ROLE_ACCOUNT_MANAGER',
        'Gérant des rapports' => 'ROLE_REPORT_MANAGER',
        'Gérant des produits' => 'ROLE_PRODUCT_MANAGER',
        'Utilisateur' => 'ROLE_USER'
    );

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $familyName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $emailAddress;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $phone;

    public function __construct()
    {
        array_push($this->roles, 'ROLE_USER');
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getFamilyName(): ?string
    {
        return $this->familyName;
    }

    public function setFamilyName(string $familyName): self
    {
        $this->familyName = $familyName;

        return $this;
    }

    public function getEmailAddress(): ?string
    {
        return $this->emailAddress;
    }

    public function setEmailAddress(string $emailAddress): self
    {
        $this->emailAddress = $emailAddress;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Adds a new role, if correct and not already in
     * @param String $newRole
     */
    public function addRole(String $newRole)
    {
        if(in_array($newRole,self::allRoles))
            if(!in_array($newRole,$this->getRoles()))
                $this->roles[] = $newRole;
    }

    /**
     * Removes a role, if correct and not already in
     * @param String $oldRole
     */
    public function removeRole(String $oldRole)
    {
        if(in_array($oldRole,self::allRoles))
            if(($key = array_search($oldRole,$this->roles)) !== false)
                unset($this->roles[$key]);

    }

    /**
     * Returns the name of the roles in order to display them
     * @return string
     */
    public function getRolesString(): string
    {
        $res = "";
        foreach ($this->getRoles() as $role){
            $res = $res . self::rolesToNames[$role] . ", ";
        }
        return $res;
    }

    public function getSalt()
    {
        return null;
    }

    public function eraseCredentials()
    {
    }

    /** @see \Serializable::serialize() */
    public function serialize()
    {
        return serialize(array(
            $this->id,
            $this->username,
            $this->password,
            $this->roles,
            $this->name,
            $this->familyName,
            $this->emailAddress,
            $this->phone
        ));
    }

    /** @see \Serializable::unserialize() */
    public function unserialize($serialized)
    {
        list (
            $this->id,
            $this->username,
            $this->password,
            $this->roles,
            $this->name,
            $this->familyName,
            $this->emailAddress,
            $this->phone
        ) = unserialize($serialized, array('allowed_classes' => false));
    }
}
