<?php

namespace App\Entity;


use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Cocur\Slugify\Slugify;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Constraints\File as Image;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\HttpFoundation\File\File;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RecipeRepository")
 */
class Recipe
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
    private $title;

  /*  /**
     * @ORM\Column(type="float", nullable=true)
     */
  //  private $concentration;

    /**
     * @ORM\Column(type="boolean")
     */
    private $visibility;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Ingredients", mappedBy="recipe")
     */
    private $ingredients;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Mix", mappedBy="recipe", orphanRemoval=true)
     */
    private $mixes;

    public function __construct()
    {
        $this->ingredients = new ArrayCollection();
        $this->mixes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

/*    public function getConcentration(): ?float
    {
        return $this->concentration;
    }

    public function setConcentration(?float $concentration): self
    {
        $this->concentration = $concentration;

        return $this;
    }*/

    public function getVisibility(): ?bool
    {
        return $this->visibility;
    }

    public function setVisibility(bool $visibility): self
    {
        $this->visibility = $visibility;

        return $this;
    }

    /**
     * @return Collection|Ingredients[]
     */
    public function getIngredients(): Collection
    {
        return $this->ingredients;
    }

    public function addIngredient(Ingredients $ingredient): self
    {
        if (!$this->ingredients->contains($ingredient)) {
            $this->ingredients[] = $ingredient;
            $ingredient->addRecipe($this);
        }

        return $this;
    }

    public function removeIngredient(Ingredients $ingredient): self
    {
        if ($this->ingredients->contains($ingredient)) {
            $this->ingredients->removeElement($ingredient);
            $ingredient->removeRecipe($this);
        }

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

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
            $mix->setRecipe($this);
        }

        return $this;
    }

    public function removeMix(Mix $mix): self
    {
        if ($this->mixes->contains($mix)) {
            $this->mixes->removeElement($mix);
            // set the owning side to null (unless already changed)
            if ($mix->getRecipe() === $this) {
                $mix->setRecipe(null);
            }
        }

        return $this;
    }


    /**
     * @return Product|null
     */
    public function getProducts (): ?Product
    {
        $ingredient = new Ingredients();
        return $ingredient->getProduct();
    }

    public function setProducts($products)
    {
        $ingredient = new Ingredients();
        $ingredient->setProduct($products);
        return $ingredient;
    }

    public function getQuantity (): ?string
    {
        $ingredient = new Ingredients();
        return $ingredient->getQuantity();
    }

    public function setQuantity ($quantity)
    {
        $ingredient = new Ingredients();
        $ingredient->setQuantity($quantity);
        return $ingredient;
    }

}
