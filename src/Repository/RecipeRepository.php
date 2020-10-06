<?php

namespace App\Repository;

use App\Entity\RecipeSearch;
use App\Entity\Recipe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Recipe|null find($id, $lockMode = null, $lockVersion = null)
 * @method Recipe|null findOneBy(array $criteria, array $orderBy = null)
 * @method Recipe[]    findAll()
 * @method Recipe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RecipeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Recipe::class);
    }

    public function findSearchedQuery(RecipeSearch $search): Query
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

    public function findPersoSearchedQuery(RecipeSearch $search): Query
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
    //  * @return Recipe[] Returns an array of Recipe objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Recipe
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
