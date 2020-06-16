<?php

namespace App\Entity;


class UserSearch
{
    /**
     * @var string|null
     */
    private $username;

    /**
     * @var string|null
     */
    private $name;

    /**
     * @var string|null
     */
    private $familyName;

    /**
     * Undocumented variable
     *
     * @var int|null
     */
    private $trie;


    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(?string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getFamilyName(): ?string
    {
        return $this->familyName;
    }

    public function setFamilyName(?string $familyName): self
    {
        $this->familyName = $familyName;

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
}
