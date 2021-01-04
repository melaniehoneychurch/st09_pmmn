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
     * Undocumented variable
     *
     * @var Storage|null
     */
    private $storage;

    /**
     * Undocumented variable
     *
     * @var TrashCan|null
     */
    private $trashCan;

    /**
     * Undocumented variable
     *
     * @var int|null
     */
    private $trie;

    /**
     * @var Family|null
     */
    private $family;

    /**
     * @return Family|null
     */
    public function getFamily(): ?Family
    {
        return $this->family;
    }

    /**
     * @param Family|null $family
     * @return ProductSearch
     */
    public function setFamily(?Family $family): ProductSearch
    {
        $this->family = $family;
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


    /**
     * Get undocumented variable
     *
     * @return  int|null
     */ 
    public function getTrie()
    {
        return $this->trie;
    }

    /**
     * Set undocumented variable
     *
     * @param  int|null  $trie  Undocumented variable
     *
     * @return  self
     */ 
    public function setTrie($trie)
    {
        $this->trie = $trie;

        return $this;
    }

    /**
     * Get undocumented variable
     *
     * @return  Storage|null
     */ 
    public function getStorage()
    {
        return $this->storage;
    }

    /**
     * Set undocumented variable
     *
     * @param  Storage|null  $storage  Undocumented variable
     *
     * @return  self
     */ 
    public function setStorage($storage)
    {
        $this->storage = $storage;

        return $this;
    }

    /**
     * Get undocumented variable
     *
     * @return  TrashCan|null
     */ 
    public function getTrashCan()
    {
        return $this->trashCan;
    }

    /**
     * Set undocumented variable
     *
     * @param  TrashCan|null  $trashCan  Undocumented variable
     *
     * @return  self
     */ 
    public function setTrashCan($trashCan)
    {
        $this->trashCan = $trashCan;

        return $this;
    }
}