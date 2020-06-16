<?php
namespace App\Entity;

class HazardStatementSearch {


    /**
     * @var string|null
     */
    private $code;

    /**
     * Undocumented variable
     *
     * @var int|null
     */
    private $trie;

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
     * Get the value of code
     *
     * @return  string|null
     */ 
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Set the value of code
     *
     * @param  string|null  $code
     *
     * @return  self
     */ 
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }
}