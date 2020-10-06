<?php
namespace App\Entity;

class MixSearch
{


    /**
     * @var string|null
     */
    private $title;

    /**
     * Undocumented variable
     *
     * @var float|null
     */
    private $concentration;


    /**
     * Undocumented variable
     *
     * @var int|null
     */
    private $trie;

    /**
     * @return int|null
     */
    public function getTrie(): ?int
    {
        return $this->trie;
    }

    /**
     * @param int|null $trie
     */
    public function setTrie(?int $trie): void
    {
        $this->trie = $trie;
    }

    /**
     * @return float|null
     */
    public function getConcentration(): ?float
    {
        return $this->concentration;
    }

    /**
     * @param float|null $concentration
     */
    public function setConcentration(?float $concentration): void
    {
        $this->concentration = $concentration;
    }

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

}