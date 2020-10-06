<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MixRepository")
 */
class Mix
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

 /*   /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
 //   private $concentration;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="boolean")
     */
    private $confidentiality;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Recipe", inversedBy="mixes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $recipe;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Report", mappedBy="mix")
     */
    private $report;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Ingredients", inversedBy="mixes")
     */
    private $ingredients;

    public function __construct()
    {
        $this->report = new ArrayCollection();
        $this->ingredients = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

 /*   public function getConcentration(): ?string
    {
        return $this->concentration;
    }

    public function setConcentration(?string $concentration): self
    {
        $this->concentration = $concentration;

        return $this;
    } */

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getConfidentiality(): ?bool
    {
        return $this->confidentiality;
    }

    public function setConfidentiality(bool $confidentiality): self
    {
        $this->confidentiality = $confidentiality;

        return $this;
    }

    public function getRecipe(): ?recipe
    {
        return $this->recipe;
    }

    public function setRecipe(?recipe $recipe): self
    {
        $this->recipe = $recipe;

        return $this;
    }

    /**
     * @return Collection|report[]
     */
    public function getReport(): Collection
    {
        return $this->report;
    }

    public function addReport(report $report): self
    {
        if (!$this->report->contains($report)) {
            $this->report[] = $report;
            $report->setMix($this);
        }

        return $this;
    }

    public function removeReport(report $report): self
    {
        if ($this->report->contains($report)) {
            $this->report->removeElement($report);
            // set the owning side to null (unless already changed)
            if ($report->getMix() === $this) {
                $report->setMix(null);
            }
        }

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
        }

        return $this;
    }

    public function removeIngredient(Ingredients $ingredient): self
    {
        if ($this->ingredients->contains($ingredient)) {
            $this->ingredients->removeElement($ingredient);
        }

        return $this;
    }
}
