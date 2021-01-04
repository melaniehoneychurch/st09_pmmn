<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RiskOfUseRepository")
 */
class RiskOfUse
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="riskOfUses")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Product", inversedBy="riskOfUses")
     */
    private $product;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Mix", inversedBy="riskOfUses")
     */
    private $mix;

    /**
     * @ORM\Column(type="datetime")
     */
    private $useAt;

    public function __construct(){
        $this->useAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): self
    {
        $this->product = $product;

        return $this;
    }

    public function getMix(): ?Mix
    {
        return $this->mix;
    }

    public function setMix(?Mix $mix): self
    {
        $this->mix = $mix;

        return $this;
    }

    public function getUseAt(): ?\DateTimeInterface
    {
        return $this->useAt;
    }

    public function setUseAt(\DateTimeInterface $useAt): self
    {
        $this->useAt = $useAt;

        return $this;
    }
}
