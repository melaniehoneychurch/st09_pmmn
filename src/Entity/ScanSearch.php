<?php


namespace App\Entity;


/**
 * Class ScanSearch
 * @package App\Entity
 */
class ScanSearch
{
    /**
     * @var string|null
     */
    private $code;

    /**
     * @return string|null
     */
    public function getCode(): ?string
    {
        return $this->code;
    }

    /**
     * @param string|null $code
     * @return ScanSearch
     */
    public function setCode(?string $code): ScanSearch
    {
        $this->code = $code;
        return $this;
    }

}