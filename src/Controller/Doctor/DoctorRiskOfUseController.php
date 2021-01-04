<?php


namespace App\Controller\Doctor;


use App\Repository\RiskOfUseRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;

class DoctorRiskOfUseController extends AbstractController
{
    /**
     * @var RiskOfUseRepository
     */
    private $repository;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var Security
     */
    private $security;

    /**
     * DoctorRiskOfUseController constructor.
     * @param RiskOfUseRepository $repository
     * @param EntityManagerInterface $em
     * @param Security $security
     */
    public function __construct(RiskOfUseRepository $repository, EntityManagerInterface $em, Security $security)
    {
        $this->repository = $repository;
        $this->em = $em;
        $this->security = $security;
    }


}