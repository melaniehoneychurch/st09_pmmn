<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\IngredientsRepository")
 */
class Ingredients
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $quantity;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Product", inversedBy="ingredients", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $product;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Recipe", inversedBy="ingredients")
     */
    private $recipe;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Mix", mappedBy="ingredients")
     */
    private $mixes;

    public function __construct()
    {
        $this->recipe = new ArrayCollection();
        $this->mixes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuantity(): ?string
    {
        return $this->quantity;
    }

    public function setQuantity(?string $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getProduct(): ?product
    {
        return $this->product;
    }

    public function setProduct(product $product): self
    {
        $this->product = $product;

        return $this;
    }

    /**
     * @return Collection|recipe[]
     */
    public function getRecipe(): Collection
    {
        return $this->recipe;
    }

    public function addRecipe(recipe $recipe): self
    {
        if (!$this->recipe->contains($recipe)) {
            $this->recipe[] = $recipe;
        }

        return $this;
    }

    public function removeRecipe(recipe $recipe): self
    {
        if ($this->recipe->contains($recipe)) {
            $this->recipe->removeElement($recipe);
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
            $mix->addIngredient($this);
        }

        return $this;
    }

    public function removeMix(Mix $mix): self
    {
        if ($this->mixes->contains($mix)) {
            $this->mixes->removeElement($mix);
            $mix->removeIngredient($this);
        }

        return $this;
    }
}
