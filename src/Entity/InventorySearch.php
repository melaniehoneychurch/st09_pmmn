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
     * @var User|null
     */
    private $owner;

    /**
     * @var Storage|null
     */
    private $storage;

    /**
     * @var \DateTime|null
     */
    private $entrydate;

    private $including;

    private $qr_code;

    /**
     * @return mixed
     */
    public function getQrCode()
    {
        return $this->qr_code;
    }

    /**
     * @param mixed $qr_code
     * @return InventorySearch
     */
    public function setQrCode($qr_code)
    {
        $this->qr_code = $qr_code;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getIncluding()
    {
        return $this->including;
    }

    /**
     * @param mixed $including
     * @return InventorySearch
     */
    public function setIncluding($including)
    {
        $this->including = $including;
        return $this;
    }

    /**
     * @return \DateTime|null
     */
    public function getEntrydate(): ?\DateTime
    {
        return $this->entrydate;
    }

    /**
     * @param \DateTime|null $entrydate
     * @return InventorySearch
     */
    public function setEntrydate(?\DateTime $entrydate): InventorySearch
    {
        $this->entrydate = $entrydate;
        return $this;
    }



    /**
     * @return Storage|null
     */
    public function getStorage(): ?Storage
    {
        return $this->storage;
    }

    /**
     * @param Storage|null $storage
     */
    public function setStorage(?Storage $storage): void
    {
        $this->storage = $storage;
    }

    /**
     * @return User|null
     */
    public function getOwner(): ?User
    {
        return $this->owner;
    }

    /**
     * @param User|null $owner
     */
    public function setOwner(?User $owner): void
    {
        $this->owner = $owner;
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