<?php

namespace App\Repository;

use App\Entity\Inventory;
use App\Entity\InventorySearch;
use Doctrine\ORM\Query;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Inventory|null find($id, $lockMode = null, $lockVersion = null)
 * @method Inventory|null findOneBy(array $criteria, array $orderBy = null)
 * @method Inventory[]    findAll()
 * @method Inventory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InventoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Inventory::class);
    }

    public function findSearchedQuery(InventorySearch $search): Query
    {
        $query =  $this->createQueryBuilder('p');

        if($search->getTitle()){
            $query = $query->andWhere('p.title LIKE :title')
                ->setParameter('title', '%'.$search->getTitle().'%')
            ;
        }

        if($search->getOwner()){
            $query = $query
                ->andWhere('p.owner = :owner')
                ->setParameter('owner', $search->getOwner()->getId())
            ;
        }

        if($search->getEntrydate()){
            $query = $query
                ->andWhere('p.entry_date >= :date')
                ->setParameter('date', $search->getEntrydate())
            ;
        }

        if($search->getIncluding()){
            $value = $search->getIncluding();
                $query = $query
                    ->andWhere('p.qr_code LIKE :code')
                    ->setParameter('code', '%'.$value.'%')
                ;
        }

        /* Requête SQL :
        SELECT *
        FROM `inventory` i, `product` p, `mix` m, `storage` s
        WHERE
        (i.`product_id`=p.`id` AND p.`storage_id`=s.`id` AND s.`id`=[value])
        OR
        (i.`mix_id`=m.`id` AND m.`storage_id`=s.`id` AND s.`id`=[value])
        */

        /* Requête SQL avec les INNER JOIN :
        SELECT DISTINCT `inventory`.*
        FROM `inventory`
        INNER JOIN `product`
        INNER JOIN `mix`
        INNER JOIN `storage`
        WHERE
        (
        (`inventory`.`product_id`=`product`.`id` AND `product`.`storage_id`=`storage`.`id`)
        OR
        (`inventory`.`mix_id`=`mix`.`id` AND `mix`.`storage_id`=`storage`.`id`)
        )
        AND `storage`.`id`='[value]' */

        if($search->getStorage()){
            $query = $query->andWhere('p.storage = :storage')
                ->setParameter('storage', $search->getStorage()->getId());
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
            }
        }else{
            $query = $query->orderBy('p.title', 'ASC');
        }

        return $query->getQuery();

    }

    /**
    //  * @return Inventory[] Returns an array of Inventory objects
    //  */
    public function findByOwner($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.owner = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findOneByMix($value): ?Inventory
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.mix = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }



    // /**
    //  * @return Inventory[] Returns an array of Inventory objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Inventory
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
