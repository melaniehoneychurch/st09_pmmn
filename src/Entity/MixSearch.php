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
     * @var User|null
     */
    private $creator;

    /**
     * @return User|null
     */
    public function getCreator(): ?User
    {
        return $this->creator;
    }

    /**
     * @param User|null $creator
     */
    public function setCreator(?User $creator): void
    {
        $this->creator = $creator;
    }



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