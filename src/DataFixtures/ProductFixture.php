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
        /*$hazard = [
            ["H201",
                "H202",
                "H203",
                "H204",
                "H205",
                "H220",
                "H221",
                "H222",
                "H223",
                "H224",
                "H225",
                "H226",
                "H227",
                "H228",
                "H229",
                "H230",
                "H231",
                "H240",
                "H241",
                "H242",
                "H250",
                "H251",
                "H252",
                "H260",
                "H261",
                "H270",
                "H271",
                "H272",
                "H280",
                "H281",
                "H290",
                "H300",
                "H301",
                "H302",
                "H304",
                "H310",
                "H311",
                "H312",
                "H314",
                "H315",
                "H317",
                "H318",
                "H319",
                "H330",
                "H331",
                "H332",
                "H334",
                "H335",
                "H336",
                "H340",
                "H341",
                "H350",
                "H350i",
                "H351",
                "H360",
                "H360d",
                "H360Df",
                "H360F",
                "H360Fd",
                "H360",
                "H361",
                "H361d",
                "H361f",
                "H361fd",
                "H362",
                "H370",
                "H371",
                "H372",
                "H373",
                "H400",
                "H403",
                "H410",
                "H411",
                "H412",
                "H413",
                "H420"],
            ["Explosif : danger d'explosion en masse",
                "Explosif : danger sérieux de projection",
                "Explosif : danger d'incendie, d'effet de souffle ou de projection",
                "Danger d'incendie ou de projection",
                "Danger d'explosion en masse en cas d'incendie",
                "Gaz extrêmement inflammable",
                "Gaz inflammable",
                "Aérosol extrêmement inflammable",
                "Aérosol inflammable",
                "Liquide et vapeurs extrêmement inflammables",
                "Liquide et vapeurs très inflammables",
                "Liquide et vapeurs inflammables",
                "Liquide combustible",
                "Matière solide inflammable",
                "Récipient sous pression : peut éclater sous l'effet de la chaleur.",
                "Peut exploser même en l'absence d'air.",
                "Peut exploser même en l'absence d'air à une pression et/ou une température élevée(s).",
                "Peut exploser en cas d'échauffement",
                "Peut s'enflammer ou exploser en cas d'échauffement",
                "Peut s'enflammer en cas d'échauffement",
                "s'enflamme spontanément au contact de l'air",
                "Matière auto-échauffante ; peut s'enflammer",
                "Matière auto-échauffante en grandes quantités ; peut s'enflammer",
                "Dégage, au contact de l'eau, des gaz inflammables qui peuvent s'enflammer spontanément",
                "Dégage, au contact de l'eau, des gaz inflammables",
                "Peut provoquer ou aggraver un incendie ; comburant",
                "Peut provoquer un incendie ou une explosion ; comburant puissant",
                "Peut aggraver un incendie ; comburant",
                "Contient un gaz sous pression ; peut exploser sous l'effet de la chaleur",
                "Contient un gaz réfrigéré ; peut causer des brûlures ou blessures cryogéniques",
                "Peut être corrosif pour les métaux",
                "Mortel en cas d'ingestion",
                "Toxique en cas d'ingestion",
                "Nocif en cas d'ingestion",
                "Peut être mortel en cas d'ingestion et de pénétration dans les voies respiratoires",
                "Mortel par contact cutané",
                "Toxique par contact cutané",
                "Nocif par contact cutané",
                "Provoque de graves brûlures de la peau et de graves lésions des yeux.",
                "Provoque une irritation cutanée",
                "Peut provoquer une allergie cutanée",
                "Provoque de graves lésions des yeux.",
                "Provoque une sévère irritation des yeux",
                "Mortel par inhalation",
                "Toxique par inhalation",
                "Nocif par inhalation",
                "Peut provoquer des symptômes allergiques ou d'asthme ou des difficultés respiratoires par inhalation",
                "Peut irriter les voies respiratoires",
                "Peut provoquer somnolence ou vertiges",
                "Peut induire des anomalies génétiques (indiquer la voie d'exposition s'il est formellement prouvé qu'aucune autre voie d'exposition ne conduit au même danger)",
                "Susceptible d'induire des anomalies génétiques (indiquer la voie d'exposition s'il est formellement prouvé qu'aucune autre voie d'exposition ne conduit au même danger)",
                "Peut provoquer le cancer (indiquer la voie d'exposition s'il est formellement prouvé qu'aucune autre voie d'exposition ne conduit au même danger)",
                "Peut provoquer le cancer par inhalation.",
                "Susceptible de provoquer le cancer (indiquer la voie d'exposition s'il est formellement prouvé qu'aucune autre voie d'exposition ne conduit au même danger)",
                "Peut nuire à la Fertilité ou au fœtus (indiquer l'effet s'il est connu) (indiquer la voie d'exposition s'il est formellement prouvé qu'aucune autre voie d'exposition ne conduit au même danger)",
                "Peut nuire au fœtus.",
                "Peut nuire au fœtus. Susceptible de nuire à la Fertilité.",
                "Peut nuire à la Fertilité.",
                "Peut nuire à la Fertilité. Susceptible de nuire au fœtus.",
                "Susceptible de nuire à la Fertilité ou au fœtus (indiquer l'effet s'il est connu) (indiquer la voie d'exposition s'il est formellement prouvé qu'aucune autre voie d'exposition ne conduit au même danger)",
                "Susceptible de nuire au fœtus.",
                "Susceptible de nuire à la Fertilité.",
                "Susceptible de nuire à la Fertilité. Susceptible de nuire au fœtus.",
                "Peut être nocif pour les bébés nourris au lait maternel",
                "Risque avéré d'effets graves pour les organes (ou indiquer tous les organes affectés, s'ils sont connus) (indiquer la voie d'exposition s'il est formellement prouvé qu'aucune autre voie d'exposition ne conduit au même danger)",
                "Risque présumé d'effets graves pour les organes (ou indiquer tous les organes affectés, s'ils sont connus) (indiquer la voie d'exposition s'il est formellement prouvé qu'aucune autre voie d'exposition ne conduit au même danger)",
                "Risque avéré d'effets graves pour les organes (indiquer tous les organes affectés, s'ils sont connus) à la suite d'expositions répétées ou d'une exposition prolongée (indiquer la voie d'exposition s'il est formellement prouvé qu'aucune autre voie d'exposition ne conduit au même danger)",
                "Risque présumé d'effets graves pour les organes (indiquer tous les organes affectés, s'ils sont connus) à la suite d'expositions répétées ou d'une exposition prolongée (indiquer la voie d'exposition s'il est formellement prouvé qu'aucune autre voie d'exposition ne conduit au même danger)",
                "Très toxique pour les organismes aquatiques",
                "Nocif pour les organismes aquatiques",
                "Très toxique pour les organismes aquatiques, entraîne des effets à long terme",
                "Toxique pour les organismes aquatiques, entraîne des effets à long terme",
                "Nocif pour les organismes aquatiques, entraîne des effets à long terme",
                "Peut entraîner des effets néfastes à long terme pour les organismes aquatiques",
                "Nuit à la santé publique et à l’environnement en détruisant l’ozone dans la haute atmosphère"]
        ];

        for ($i = 0; $i < 76; $i++){
            $hazardStatement = new HazardStatement();
            $hazardStatement
                ->setCode($hazard[0][i])
                ->setText($hazard[1][i])
            ;
            $manager->persist($hazardStatement);
        }

        $storage_array = [
            ["name" => "Placard", "color" => NULL],
            ["name" => "Placard 2", "color" => NULL],
            ["name" => "Placard 3", "color" => NULL]
        ];

        foreach ($storage_array as $key => $value){
            $storage = new Storage();
            $storage
                ->setName($storage_array['name'])
                ->setColor($storage_array['color'])
            ;
            $manager->persist($storage);
        }

        $pictogram_array = [
            ['image' => '5f5b7353a8c3a275708385.png', 'date' => '2020-09-11 12:53:39', 'type' => '0', 'name' => 'Dangereux'],
            ['image' => '5f5b766ad83cf444933527.png', 'date' => '2020-09-11 13:06:50', 'type' => '0', 'name' => 'Inflammable'],
            ['image' => '5f5b7684d43d1668321340.png', 'date' => '2020-09-11 13:07:16', 'type' => '0', 'name' => 'Gaz sous pression'],
            ['image' => '5f5b769c1ab36580781715.png', 'date' => '2020-09-11 13:07:39', 'type' => '0', 'name' => 'Polluant'],
            ['image' => '5f5b76b632951231612470.png', 'date' => '2020-09-11 13:37:20', 'type' => '0', 'name' => 'Cancérogène, mutagène, reprotoxique'],
            ['image' => '5f5b76d0e29f1235138856.png', 'date' => '2020-09-11 13:08:32', 'type' => '0', 'name' => 'Explosif'],
            ['image' => '5f5b76e4cda32450242856.png', 'date' => '2020-09-11 13:08:52', 'type' => '0', 'name' => 'Comburant'],
            ['image' => '5f5b76f805234757271598.png', 'date' => '2020-09-11 13:09:11', 'type' => '0', 'name' => 'Corrosif'],
            ['image' => '5f5b7707f1aee734032346.png', 'date' => '2020-09-11 13:09:27', 'type' => '0', 'name' => 'Toxique']
        ];

        foreach ($pictogram_array as $key => $value){
            $pictogram=new Pictogram();
            $pictogram
                ->setImageName($pictogram_array['image'])
                ->setType($pictogram_array['type'])
                ->setName($pictogram_array['name'])
            ;
            $manager->persist($pictogram);
        }

        $trashCan_array = [
            ['name' => 'Mélange chlorés', 'color' => '#20eea2'],
            ['name' => 'Mélange non chlorés', 'color' =>  '#f0dc56'],
            ['name' => 'Bases', 'color' =>  '#f31616'],
            ['name' => 'Acides', 'color' =>  '#15b8ef']
        ];

        foreach ($trashCan_array as $key => $value){
            $trashCan = new TrashCan();
            $trashCan
                ->setName($trashCan_array['name'])
                ->setColor($trashCan_array['color'])
            ;
            $manager->persist($trashCan);
        }*/

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
