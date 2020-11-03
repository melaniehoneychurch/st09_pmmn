<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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

    /**
     * @ORM\Column(type="datetime")
     */
    private $updated_at;

    /**
     * @ORM\Column(type="boolean")
     */
    private $activate;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Report", mappedBy="user")
     */
    private $reports;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Recipe", mappedBy="author")
     */
    private $recipes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Mix", mappedBy="creator")
     */
    private $mixes;

    public function __construct()
    {
        array_push($this->roles, 'ROLE_USER');
        $this->updated_at = new \Datetime();
        $this->reports = new ArrayCollection();
        $this->recipes = new ArrayCollection();
        $this->mixes = new ArrayCollection();
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

    public function getIdentity() : string
    {
        return $this->getName().' '.$this->getFamilyName();
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

    /**
     * Get the value of updated_at
     */ 
    public function getUpdated_at()
    {
        return $this->updated_at;
    }

    /**
     * Set the value of updated_at
     *
     * @return  self
     */ 
    public function setUpdated_at($updated_at)
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getActivate(): ?bool
    {
        return $this->activate;
    }

    public function setActivate(bool $activate): self
    {
        $this->activate = $activate;

        return $this;
    }

    /**
     * @return Collection|Report[]
     */
    public function getReports(): Collection
    {
        return $this->reports;
    }

    public function addReport(Report $report): self
    {
        if (!$this->reports->contains($report)) {
            $this->reports[] = $report;
            $report->setUser($this);
        }

        return $this;
    }

    public function removeReport(Report $report): self
    {
        if ($this->reports->contains($report)) {
            $this->reports->removeElement($report);
            // set the owning side to null (unless already changed)
            if ($report->getUser() === $this) {
                $report->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Recipe[]
     */
    public function getRecipes(): Collection
    {
        return $this->recipes;
    }

    public function addRecipe(Recipe $recipe): self
    {
        if (!$this->recipes->contains($recipe)) {
            $this->recipes[] = $recipe;
            $recipe->setAuthor($this);
        }

        return $this;
    }

    public function removeRecipe(Recipe $recipe): self
    {
        if ($this->recipes->contains($recipe)) {
            $this->recipes->removeElement($recipe);
            // set the owning side to null (unless already changed)
            if ($recipe->getAuthor() === $this) {
                $recipe->setAuthor(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Mix[]
     */
    public function getMixes(): Collection
    {
        return $this->mixes;
    }

    public function addMix(Mix $mix): self
    {
        if (!$this->mixes->contains($mix)) {
            $this->mixes[] = $mix;
            $mix->setCreator($this);
        }

        return $this;
    }

    public function removeMix(Mix $mix): self
    {
        if ($this->mixes->contains($mix)) {
            $this->mixes->removeElement($mix);
            // set the owning side to null (unless already changed)
            if ($mix->getCreator() === $this) {
                $mix->setCreator(null);
            }
        }

        return $this;
    }
}
