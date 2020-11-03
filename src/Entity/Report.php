<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ReportRepository")
 */
class Report
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
    private $description;

    /**
     * @ORM\Column(type="boolean")
     */
    private $treatment;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\user", inversedBy="reports")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Mix", inversedBy="report")
     */
    private $mix;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getTreatment(): ?bool
    {
        return $this->treatment;
    }

    public function setTreatment(bool $treatment): self
    {
        $this->treatment = $treatment;

        return $this;
    }


    public function getUser(): ?user
    {
        return $this->user;
    }

    public function setUser(?user $user): self
    {
        $this->user = $user;

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
}
