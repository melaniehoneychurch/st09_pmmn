<?php
namespace App\Entity;

class RecipeSearch
{


    /**
     * @var string|null
     */
    private $title;

    /**
     * @var User|null
     */
    private $author;

    /**
     * @return User|null
     */
    public function getAuthor(): ?User
    {
        return $this->author;
    }

    /**
     * @param User|null $author
     */
    public function setAuthor(?User $author): void
    {
        $this->author = $author;
    }


    /**
     * @var bool
     */
    private $confidentiality=true;

    /**
     * @return mixed
     */
  public function getConfidentiality()
    {
        return $this->confidentiality;
    }

    /**
     * @param mixed $confidentiality
     */
 public function setConfidentiality($confidentiality): void
    {
        $this->confidentiality = $confidentiality;
    }

    /**
     * @return mixed
     */
 /*   public function getAuthor()
    {
        return $this->author;
    }

    /**
     * @param mixed $author
     */
/*    public function setAuthor($author): void
    {
        $this->author = $author;
    }*/

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