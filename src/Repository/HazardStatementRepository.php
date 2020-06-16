<?php

namespace App\Repository;

use App\Entity\HazardStatement;
use App\Entity\HazardStatementSearch;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method HazardStatement|null find($id, $lockMode = null, $lockVersion = null)
 * @method HazardStatement|null findOneBy(array $criteria, array $orderBy = null)
 * @method HazardStatement[]    findAll()
 * @method HazardStatement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HazardStatementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, HazardStatement::class);
    }



    public function findSearchedQuery(HazardStatementSearch $search)
    {
        $query =  $this->createQueryBuilder('h');

        if($search->getCode()){
            $query = $query->andWhere('h.code LIKE :code')
                ->setParameter('code', '%'.$search->getCode().'%');
        }

        if($search->getTrie()){
            switch($search->getTrie()){
                case 0:
                    $query = $query->orderBy('h.code', 'ASC');
                break;
                case 1:
                    $query = $query->orderBy('h.code', 'DESC');
                break;
                case 2:
                    $query = $query->orderBy('h.updated_at', 'ASC');
                break;
                case 3:
                    $query = $query->orderBy('h.updated_at', 'DESC');
                break;
                

            }
        }else{
            $query = $query->orderBy('h.code', 'ASC');
        }

       
        return $query->getQuery();
        
    }

    // /**
    //  * @return HazardStatement[] Returns an array of HazardStatement objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('h.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?HazardStatement
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
