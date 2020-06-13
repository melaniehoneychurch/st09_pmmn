<?php
namespace App\Entity;

class ProductSearch {


    /**
     * @var string|null
     */
    private $frenchName;

    /**
     * Undocumented variable
     *
     * @var string|null
     */
    private $casNumber;
    
    

    /**
     * Get the value of frenchName
     *
     * @return  string|null
     */ 
    public function getFrenchName()
    {
        return $this->frenchName;
    }

    /**
     * Set the value of frenchName
     *
     * @param  string|null  $frenchName
     *
     * @return  self
     */ 
    public function setFrenchName($frenchName)
    {
        $this->frenchName = $frenchName;

        return $this;
    }

    /**
     * Get undocumented variable
     *
     * @return  string|null
     */ 
    public function getCasNumber()
    {
        return $this->casNumber;
    }

    /**
     * Set undocumented variable
     *
     * @param  string|null  $casNumber  Undocumented variable
     *
     * @return  self
     */ 
    public function setCasNumber($casNumber)
    {
        $this->casNumber = $casNumber;

        return $this;
    }
}