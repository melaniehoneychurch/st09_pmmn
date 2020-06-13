<?php

namespace App\Repository;

use App\Entity\Product;
use App\Entity\ProductSearch;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\DBAL\Query\QueryBuilder;
use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;

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
    public function findAllVisibleQuery(ProductSearch $productSearch): Query
    {
        $query =  $this->findVisibleQuery();
            
        if($productSearch->getFrenchName()){
            $query = $query->andWhere('p.frenchName LIKE :name OR p.englishName LIKE :name OR p.nomenclature LIKE :name OR p.otherName LIKE :name')
                ->setParameter('name', '%'.$productSearch->getFrenchName().'%')
                ->orderBy('p.updated_at', 'DESC')
                ;
        }

        if($productSearch->getCasNumber()){
            $query = $query->andWhere('p.casNumber LIKE :cas')
                ->setParameter('cas', '%'.$productSearch->getCasNumber().'%');
        }

        if($productSearch->getStorage()){
            $query = $query->leftJoin('p.storage', 'storage')
            ->andWhere('storage.name LIKE :storage')
                ->setParameter('storage', '%'.$productSearch->getStorage().'%');
        }

        if($productSearch->getTrashCan()){
            $query = $query->leftJoin('p.trashCan', 'trashCan')
            ->andWhere('trashCan.name LIKE :trashCan')
                ->setParameter('trashCan', '%'.$productSearch->getTrashCan().'%');
        }

        if($productSearch->getAlphabet()){
            switch($productSearch->getAlphabet()){
                case 0:
                    $query = $query->orderBy('p.frenchName', 'ASC');
                break;
                case 1:
                    $query = $query->orderBy('p.frenchName', 'DESC');
                break;
            }
            
        }

        if($productSearch->getDate()){
            switch($productSearch->getAlphabet()){
                case 0:
                    $query = $query->orderBy('p.updated_at', 'ASC');
                break;
                case 1:
                    $query = $query->orderBy('p.updated_at', 'DESC');
                break;
            }
            
        }

       
        return $query->getQuery();
        
    }

    private function findVisibleQuery()
    {
        return $this->createQueryBuilder('p')
        ->orderBy('p.frenchName', 'ASC');
        ;
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
