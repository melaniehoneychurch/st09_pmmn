<?php

namespace App\Repository;

use App\Entity\Mix;
use App\Entity\MixSearch;
use App\Entity\ProductSearch;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Mix|null find($id, $lockMode = null, $lockVersion = null)
 * @method Mix|null findOneBy(array $criteria, array $orderBy = null)
 * @method Mix[]    findAll()
 * @method Mix[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MixRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Mix::class);
    }

    public function findSearchedQuery(MixSearch $search): Query
    {
        $query =  $this->createQueryBuilder('p');

        if($search->getTitle()){
            $query = $query->andWhere('p.title LIKE :title')
                ->setParameter('title', '%'.$search->getTitle().'%')
            ;
        }

        if($search->getConcentration()){
            $query = $query->andWhere('p.concentration LIKE :c')
                ->setParameter('c', '%'.$search->getConcentration().'%');
        }

        if($search->getTrie()){
            switch($search->getTrie()){
                case 0:
                    $query = $query->orderBy('p.title', 'ASC');
                    break;
                case 1:
                    $query = $query->orderBy('p.title', 'DESC');
                    break;
                case 2:
                    $query = $query->orderBy('p.updated_at', 'DESC');
                    break;
                case 3:
                    $query = $query->orderBy('p.updated_at', 'ASC');
                    break;


            }
        }else{
            $query = $query->orderBy('p.title', 'ASC');
        }


        return $query->getQuery();

    }

    // /**
    //  * @return Mix[] Returns an array of Mix objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Mix
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
