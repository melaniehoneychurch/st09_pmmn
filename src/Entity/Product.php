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
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 * @Vich\Uploadable
 * @UniqueEntity("frenchName")
 * 
 */
class Product
{
    const COLOR = [
        "Vert" => "success",
        "Orange" => "warning",
        "Rouge" => "danger",
    ];

    public function __construct()
    {
        $this->updated_at = new \Datetime();
        $this->categories = new ArrayCollection();
        $this->pictograms = new ArrayCollection();
        $this->hazardStatements = new ArrayCollection();
    }
   
   
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * 
     * @Vich\UploadableField(mapping="product_security_form", fileNameProperty="securityFormNameFile")
     * @var File|null
     */
    private $securityFormFile;

    /**
     *
     * @var string|null
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $securityFormNameFile;

    /**
     * 
     * @Vich\UploadableField(mapping="product_images_formula", fileNameProperty="imageNameFormula")
     * @var File|null
     */
    private $formulaImageFile;

    /**
     *
     * @var string|null
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $imageNameFormula;

    /**
     *
     * @var string|null
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $colorName;

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
     * @Assert\Regex("/\b[1-9]{1}[0-9]{1,5}-\d{2}-\d\b/")
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
     * @ORM\Column(type="datetime")
     */
    private $updated_at;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Pictogram", cascade={"persist"})
     */
    private $pictograms;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Storage")
     * @ORM\JoinColumn(nullable=false)
     */
    private $storage;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TrashCan")
     * @ORM\JoinColumn(nullable=false)
     */
    private $trashCan;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\HazardStatement", cascade={"persist"})
     */
    private $hazardStatements;

    public function getSlug(): string
    {
        return (new Slugify())->slugify($this->frenchName);
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @param File|null $imageFile
     */
    public function setFormulaImageFile(?File $formulaImageFile = null): void
    {
        $this->formulaImageFile = $formulaImageFile;

        if (null !== $formulaImageFile) {
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getFormulaImageFile(): ?File
    {
        return $this->formulaImageFile;
    }

    public function getImageNameFormula(): ?string
    {
        return $this->imageNameFormula;
    }

    public function setImageNameFormula(?string $imageNameFormula): self
    {
        $this->imageNameFormula = $imageNameFormula;

        return $this;
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

    public function setNomenclature(?string $nomenclature): self
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

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    /**
     * @return Collection|Pictogram[]
     */
    public function getPictograms(): Collection
    {
        return $this->pictograms;
    }

    /**
     * Return array of danger pictogram
     * @return Collection|Pictogram[]
     */
    public function getDangerPictograms(): Collection
    {
        return $this->getPictograms()->filter(function(Pictogram $pictogram){
            return $pictogram->getType()==Pictogram::TYPE['Danger'];
        });
    }

     /**
     * Return array of obligation pictogram
     * @return Collection|Pictogram[]
     */
    public function getObligationPictograms(): Collection
    {
        return $this->getPictograms()->filter(function(Pictogram $pictogram){
            return $pictogram->getType()==Pictogram::TYPE['Obligation'];
        });
    }

    public function addPictogram(Pictogram $pictogram): self
    {
        if (!$this->pictograms->contains($pictogram)) {
            $this->pictograms[] = $pictogram;
        }

        return $this;
    }

    public function removePictogram(Pictogram $pictogram): self
    {
        if ($this->pictograms->contains($pictogram)) {
            $this->pictograms->removeElement($pictogram);
        }

        return $this;
    }

    public function getStorage(): ?Storage
    {
        return $this->storage;
    }

    public function setStorage(?Storage $storage): self
    {
        $this->storage = $storage;

        return $this;
    }

    public function getTrashCan(): ?TrashCan
    {
        return $this->trashCan;
    }

    public function setTrashCan(?TrashCan $trashCan): self
    {
        $this->trashCan = $trashCan;

        return $this;
    }

    /**
     * @return Collection|HazardStatement[]
     */
    public function getHazardStatements(): Collection
    {
        return $this->hazardStatements;
    }

    public function addHazardStatement(HazardStatement $hazardStatement): self
    {
        if (!$this->hazardStatements->contains($hazardStatement)) {
            $this->hazardStatements[] = $hazardStatement;
        }

        return $this;
    }

    public function removeHazardStatement(HazardStatement $hazardStatement): self
    {
        if ($this->hazardStatements->contains($hazardStatement)) {
            $this->hazardStatements->removeElement($hazardStatement);
        }

        return $this;
    }

    

    /**
     * Get the value of colorName
     *
     * @return  int|null
     */ 
    public function getColorName()
    {
        return $this->colorName;
    }

    /**
     * Set the value of colorName
     *
     * @param  int|null  $colorName
     *
     * @return  self
     */ 
    public function setColorName($colorName)
    {
        $this->colorName = $colorName;

        return $this;
    }

    /**
     * Get the value of securityFormFile
     *
     * @return  File|null
     */ 
    public function getSecurityFormFile()
    {
        return $this->securityFormFile;
    }

    /**
     * Set the value of securityFormFile
     *
     * @param  File|null  $securityFormFile
     *
     * @return  self
     */ 
    public function setSecurityFormFile($securityFormFile)
    {
        $this->securityFormFile = $securityFormFile;

        return $this;
    }

    /**
     * Get the value of securityFormNameFile
     *
     * @return  string|null
     */ 
    public function getSecurityFormNameFile()
    {
        return $this->securityFormNameFile;
    }

    /**
     * Set the value of securityFormNameFile
     *
     * @param  string|null  $securityFormNameFile
     *
     * @return  self
     */ 
    public function setSecurityFormNameFile($securityFormNameFile)
    {
        $this->securityFormNameFile = $securityFormNameFile;

        return $this;
    }
}
