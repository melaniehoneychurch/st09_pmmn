<?php

namespace App\Repository;

use App\Entity\Product;
use Doctrine\ORM\Query;
use App\Entity\ProductSearch;
use Doctrine\DBAL\Query\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Product|null find($id, $lockMode = null, $lockVersion = null)
 * @method Product|null findOneBy(array $criteria, array $orderBy = null)
 * @method Product[]    findAll()
 * @method Product[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Product::class);
    }

    /**
     * Undocumented function
     *
     * @return Query
     */
    public function findSearchedQuery(ProductSearch $search): Query
    {
        $query =  $this->createQueryBuilder('p');
            
        if($search->getFrenchName()){
            $query = $query->andWhere('p.frenchName LIKE :name OR p.englishName LIKE :name OR p.nomenclature LIKE :name OR p.otherName LIKE :name')
                ->setParameter('name', '%'.$search->getFrenchName().'%')
                ->orderBy('p.updated_at', 'DESC')
                ;
        }

        if($search->getCasNumber()){
            $query = $query->andWhere('p.casNumber LIKE :cas')
                ->setParameter('cas', '%'.$search->getCasNumber().'%');
        }

        if($search->getStorage()){
            $query = $query->andWhere('p.storage = :storage')
                ->setParameter('storage', $search->getStorage()->getId());
        }

        if($search->getTrashCan()){
            $query = $query
            ->andWhere('p.trashCan = :trashCan')
                ->setParameter('trashCan', $search->getTrashCan()->getId());
        }

        if($search->getTrie()){
            switch($search->getTrie()){
                case 0:
                    $query = $query->orderBy('p.frenchName', 'ASC');
                break;
                case 1:
                    $query = $query->orderBy('p.frenchName', 'DESC');
                break;
                case 2:
                    $query = $query->orderBy('p.updated_at', 'DESC');
                break;
                case 3:
                    $query = $query->orderBy('p.updated_at', 'ASC');
                break;
                

            }
        }else{
            $query = $query->orderBy('p.frenchName', 'ASC');
        }

       
        return $query->getQuery();
        
    }

    // /**
    //  * @return Product[] Returns an array of Product objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Product
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
