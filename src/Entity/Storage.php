<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StorageRepository")
 */
class Storage
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     */
    private $color;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Mix", mappedBy="storage")
     */
    private $mixes;

    public function __construct()
    {
        $this->mixes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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


    /**
     * Get the value of color
     */ 
    public function getColor()
    {
        return $this->color;
    }

    /**
     * Set the value of color
     *
     * @return  self
     */ 
    public function setColor($color)
    {
        $this->color = $color;

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
            $mix->setStorage($this);
        }

        return $this;
    }

    public function removeMix(Mix $mix): self
    {
        if ($this->mixes->contains($mix)) {
            $this->mixes->removeElement($mix);
            // set the owning side to null (unless already changed)
            if ($mix->getStorage() === $this) {
                $mix->setStorage(null);
            }
        }

        return $this;
    }
}
