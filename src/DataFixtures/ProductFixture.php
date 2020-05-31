<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Product;
use App\Entity\Storage;
use App\Entity\TrashCan;
use App\Entity\Pictogram;
use App\Entity\HazardStatement;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class ProductFixture extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        for($i = 0; $i < 100; $i++){
            $storage = new Storage();
            $storage->setName($faker->firstNameMale());
            $manager->persist($storage);

            $trashCan = new TrashCan();
            $trashCan->setName($faker->firstNameFemale());
            $manager->persist($trashCan);

            $pictogram=new Pictogram();
            $pictogram
                ->setType($faker->numberBetween(0, 1))
                ->setName($faker->lastName())
            ;
            $manager->persist($pictogram);


            $hazardStatement = new HazardStatement();
            $hazardStatement->setCode($faker->randomLetter().$faker->randomNumber(3, true))
                ->setText($faker->catchPhrase())
            ;
            $manager->persist($hazardStatement);

            $product = new Product();
            $product
            ->setFrenchName($faker->words(1, true))
            ->setEnglishName($faker->words(1, true))
            ->setNomenclature($faker->words(1, true))
            ->setOtherName($faker->words(1, true))
            ->setCasNumber($faker->numberBetween(1, 99).'-'.$faker->numberBetween(1, 99).'-'.$faker->numberBetween(1, 99))
            ->setMolarMass($faker->randomFloat(NULL, 0, 100))
            ->setDensity($faker->randomFloat(NULL, 0, 100))
            ->setMeltingTemperature($faker->randomFloat(NULL, -100, 100))
            ->setBoilingTemperature($faker->randomFloat(NULL, -100, 100))
            ->setOpticalIndex($faker->randomFloat(NULL, 0, 100))
            ->setAutoflameTemperature($faker->randomFloat(NULL, 0, 100))
            ->setRiskOfUse($faker->paragraph(3, true))
            ->setDangerousMixtures($faker->paragraph(3, true))
            ->setFrenchCommentary($faker->paragraph(5, true))
            ->setStorage($storage)
            ->setTrashCan($trashCan)
            ->addPictogram($pictogram)
            ->addHazardStatement($hazardStatement)
        ;

        $manager->persist($product);

        }

        $manager->flush();
    }
}
