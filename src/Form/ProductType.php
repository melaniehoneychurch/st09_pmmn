<?php

namespace App\Form;

use App\Entity\HazardStatement;
use App\Entity\Pictogram;
use App\Entity\Product;
use App\Entity\Storage;
use App\Entity\TrashCan;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('imageNameFormula')
            ->add('frenchName')
            ->add('englishName')
            ->add('nomenclature')
            ->add('otherName')
            ->add('casNumber')
            ->add('molarMass')
            ->add('density')
            ->add('meltingTemperature')
            ->add('boilingTemperature')
            ->add('opticalIndex')
            ->add('autoflameTemperature')
            ->add('riskOfUse')
            ->add('dangerousMixtures')
            ->add('frenchCommentary')
            /* ->add('updated_at') */
             ->add('pictograms', EntityType::class,[
                'class' => Pictogram::class,
                'choice_label' => 'name',
                'multiple' => true,
                'expanded' => true,
             ])
             ->add('storage', EntityType::class,[
                'class' => Storage::class,
                'choice_label' => 'name',
             ])
             ->add('trashCan', EntityType::class,[
                'class' => TrashCan::class,
                'choice_label' => 'name',
             ])
            ->add('hazardStatements', EntityType::class,[
                'class' => HazardStatement::class,
                'choice_label' => 'code',
                'multiple' => true,
                'expanded' => true,
             ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
            'translation_domain' => 'forms',
        ]);
    }
}
