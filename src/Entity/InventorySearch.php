<?php


namespace App\Entity;


class InventorySearch
{
    /**
     * @var string|null
     */
    private $title;

    /**
     * Undocumented variable
     *
     * @var int|null
     */
    private $trie;

    /**
     * @return string|null
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }

    /**
     * @param string|null $title
     */
    public function setTitle(?string $title): void
    {
        $this->title = $title;
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