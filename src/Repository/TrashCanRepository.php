<?php

namespace App\Repository;

use App\Entity\TrashCan;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TrashCan|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrashCan|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrashCan[]    findAll()
 * @method TrashCan[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrashCanRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TrashCan::class);
    }

    // /**
    //  * @return TrashCan[] Returns an array of TrashCan objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TrashCan
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
