<?php

namespace App\DataFixtures;

use App\Entity\HazardStatement;
use App\Entity\Pictogram;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Product;
use PhpParser\Node\Expr\Cast\Array_;
use App\Entity\Storage;
use App\Entity\TrashCan;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $em)
    {

        $pictogramsImageNameArray=[
            'testDanger1',
            'testDanger2',
            'testObligation1',
            'testObligation2',
        ];

        $pictogramsTypeArray=[
            0,
            0,
            1,
            1,
        ];

        $hazardStatementsCodeArray=[
            'H200',
            "H201",
            "H202",
            "H203"
        ];

        $hazardStatementsTextArray=[
            'Explosif instable',
            "Explosif : danger d'explosion en masse",
            "Explosif : danger sérieux de projection",
            "Explosif : danger d'incendie, d'effet de souffle ou de projection"
        ];

        $storage = new Storage();
        $storage->setName('Placard');

        $em->persist($storage);

        $trashCan = new TrashCan();
        $trashCan->setName('la bellepou');

        $em->persist($trashCan);

        

        $product = new Product();
        $product
            ->setFrenchName('Chloroforme')
            ->setEnglishName('Chloroform')
            ->setNomenclature('1,1,1-trichloromethane')
            ->setOtherName('Chloretherid')
            ->setCasNumber('67-66-3')
            ->setMolarMass(119.38)
            ->setDensity(1.49)
            ->setMeltingTemperature(-64)
            ->setBoilingTemperature(62)
            ->setOpticalIndex(1.442)
            ->setAutoflameTemperature(0)
            ->setRiskOfUse('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue maximus leo vehicula tempus. Cras venenatis aliquet hendrerit. Nullam imperdiet sapien sit amet massa blandit.')
            ->setDangerousMixtures('Au cours d\'un stockage prolongé, en présence d\'oxygène et sous l\'action de la lumière, le chloroforme a tendance à se décomposer en donnant du chlorure d\'hydrogène, du chlore et de l\'oxychlorure de carbone (phosgène) qui est un produit extrêmement toxique')
            ->setFrenchCommentary('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut est nec arcu eleifend tincidunt. Praesent ultricies erat sit amet dolor facilisis scelerisque. Quisque efficitur erat lorem, ac feugiat risus semper at. Aliquam pharetra ut dolor ut lobortis. Etiam hendrerit magna eu orci tempor placerat. Nam ac vulputate arcu. Duis volutpat, felis at vestibulum dictum, nisl sapien viverra diam, sit amet auctor elit dui ac eros. Class aptent taciti sociosqu ad litora torquent per conubia.')
            ->setStorage($storage)
            ->setTrashCan($trashCan)
            ;

        // Add pictogram to product
        for($i=0;$i<4;$i++){
            $pictogram=new Pictogram();
            $pictogram
                ->setType($pictogramsTypeArray[$i])
                ->setName($pictogramsImageNameArray[$i])
            ;

            $hazardStatement = new HazardStatement();
            $hazardStatement->setCode($hazardStatementsCodeArray[$i])
                ->setText($hazardStatementsTextArray[$i])
            ;

            $em->persist($hazardStatement);
            $em->persist($pictogram);


            $product->addPictogram($pictogram)
                ->addHazardStatement($hazardStatement);

            
            
        }
            
        $em->persist($product);
        $em->flush();
    }
}
