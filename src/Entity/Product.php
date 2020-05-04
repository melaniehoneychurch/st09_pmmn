<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 */
class Product
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
    private $frenchName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $englishName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $nomenclature;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $otherName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $casNumber;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $molarMass;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $density;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $meltingTemperature;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $boilingTemperature;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $opticalIndex;

    /**
     * @ORM\Column(type="float", length=255, nullable=true)
     */
    private $autoflameTemperature;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $formula;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $riskOfUse;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $dangerousMixtures;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $frenchCommentary;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $englishCommentary;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $dangerFrameColor;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $code;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $qrCode;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFrenchName(): ?string
    {
        return $this->frenchName;
    }

    public function setFrenchName(string $frenchName): self
    {
        $this->frenchName = $frenchName;

        return $this;
    }

    public function getEnglishName(): ?string
    {
        return $this->englishName;
    }

    public function setEnglishName(?string $englishName): self
    {
        $this->englishName = $englishName;

        return $this;
    }

    public function getNomenclature(): ?string
    {
        return $this->nomenclature;
    }

    public function setNomenclature(string $nomenclature): self
    {
        $this->nomenclature = $nomenclature;

        return $this;
    }

    public function getOtherName(): ?string
    {
        return $this->otherName;
    }

    public function setOtherName(?string $otherName): self
    {
        $this->otherName = $otherName;

        return $this;
    }

    public function getCasNumber(): ?string
    {
        return $this->casNumber;
    }

    public function setCasNumber(?string $casNumber): self
    {
        $this->casNumber = $casNumber;

        return $this;
    }

    public function getMolarMass(): ?float
    {
        return $this->molarMass;
    }

    public function setMolarMass(?float $molarMass): self
    {
        $this->molarMass = $molarMass;

        return $this;
    }

    public function getDensity(): ?float
    {
        return $this->density;
    }

    public function setDensity(?float $density): self
    {
        $this->density = $density;

        return $this;
    }

    public function getMeltingTemperature(): ?float
    {
        return $this->meltingTemperature;
    }

    public function setMeltingTemperature(?float $meltingTemperature): self
    {
        $this->meltingTemperature = $meltingTemperature;

        return $this;
    }

    public function getBoilingTemperature(): ?float
    {
        return $this->boilingTemperature;
    }

    public function setBoilingTemperature(?float $boilingTemperature): self
    {
        $this->boilingTemperature = $boilingTemperature;

        return $this;
    }

    public function getOpticalIndex(): ?float
    {
        return $this->opticalIndex;
    }

    public function setOpticalIndex(?float $opticalIndex): self
    {
        $this->opticalIndex = $opticalIndex;

        return $this;
    }

    public function getAutoflameTemperature(): ?float
    {
        return $this->autoflameTemperature;
    }

    public function setAutoflameTemperature(?float $autoflameTemperature): self
    {
        $this->autoflameTemperature = $autoflameTemperature;

        return $this;
    }

    public function getFormula(): ?string
    {
        return $this->formula;
    }

    public function setFormula(?string $formula): self
    {
        $this->formula = $formula;

        return $this;
    }

    public function getRiskOfUse(): ?string
    {
        return $this->riskOfUse;
    }

    public function setRiskOfUse(?string $riskOfUse): self
    {
        $this->riskOfUse = $riskOfUse;

        return $this;
    }

    public function getDangerousMixtures(): ?string
    {
        return $this->dangerousMixtures;
    }

    public function setDangerousMixtures(?string $dangerousMixtures): self
    {
        $this->dangerousMixtures = $dangerousMixtures;

        return $this;
    }

    public function getFrenchCommentary(): ?string
    {
        return $this->frenchCommentary;
    }

    public function setFrenchCommentary(?string $frenchCommentary): self
    {
        $this->frenchCommentary = $frenchCommentary;

        return $this;
    }

    public function getEnglishCommentary(): ?string
    {
        return $this->englishCommentary;
    }

    public function setEnglishCommentary(?string $englishCommentary): self
    {
        $this->englishCommentary = $englishCommentary;

        return $this;
    }

    public function getDangerFrameColor(): ?string
    {
        return $this->dangerFrameColor;
    }

    public function setDangerFrameColor(?string $dangerFrameColor): self
    {
        $this->dangerFrameColor = $dangerFrameColor;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getQrCode(): ?string
    {
        return $this->qrCode;
    }

    public function setQrCode(?string $qrCode): self
    {
        $this->qrCode = $qrCode;

        return $this;
    }
}
