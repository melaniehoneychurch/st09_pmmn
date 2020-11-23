<?php

namespace App\Repository;

use App\Entity\Product;
use App\Entity\Storage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Storage|null find($id, $lockMode = null, $lockVersion = null)
 * @method Storage|null findOneBy(array $criteria, array $orderBy = null)
 * @method Storage[]    findAll()
 * @method Storage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StorageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Storage::class);
    }

    public function findAllOrderQuery()
    {
        return $this->createQueryBuilder('p')
        ->orderBy('p.name', 'ASC')
        ->getQuery()
        ;
        
    }

    /* Requête SQL :
    SELECT COUNT(`storage`.`id`)
    FROM `storage`
    INNER JOIN `product`
    WHERE `product`.`storage_id`=`storage`.`id`
    AND `storage`.`id`=[value] */

    public function findProductByStorage(Storage $value)
    {
        return $this->createQueryBuilder('s')
            ->addSelect('COUNT(storage.id)')
            ->from('App:Storage', 'storage')
            ->innerJoin('App:Product', 'product', 'product.storage = storage')
            ->andWhere('storage.id = :value')
            ->setParameter('value', $value->getId())
            ->getQuery()
            ->getResult()
            ;
    }

    // /**
    //  * @return Storage[] Returns an array of Storage objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Storage
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
