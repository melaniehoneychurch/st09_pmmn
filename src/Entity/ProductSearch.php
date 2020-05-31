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
    private $code;

    /**
     * Undocumented variable
     *
     * @var string|null
     */
    private $trashCanName;

    /**
     * Undocumented variable
     *
     * @var string|null
     */
    private $storageName;

    


    /**
     * Get undocumented variable
     *
     * @return  string|null
     */ 
    public function getStorageName()
    {
        return $this->storageName;
    }

    /**
     * Set undocumented variable
     *
     * @param  string|null  $storageName  Undocumented variable
     *
     * @return  self
     */ 
    public function setStorageName($storageName)
    {
        $this->storageName = $storageName;

        return $this;
    }

    /**
     * Get undocumented variable
     *
     * @return  string|null
     */ 
    public function getTrashCanName()
    {
        return $this->trashCanName;
    }

    /**
     * Set undocumented variable
     *
     * @param  string|null  $trashCanName  Undocumented variable
     *
     * @return  self
     */ 
    public function setTrashCanName($trashCanName)
    {
        $this->trashCanName = $trashCanName;

        return $this;
    }

    /**
     * Get undocumented variable
     *
     * @return  string|null
     */ 
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Set undocumented variable
     *
     * @param  string|null  $code  Undocumented variable
     *
     * @return  self
     */ 
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

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
}