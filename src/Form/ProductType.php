<?php

namespace App\Form;

use App\Entity\Product;
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
            /* ->add('pictograms') */
            /* ->add('storage') */
            /* ->add('trashCan') */
            /* ->add('hazardStatements') */
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
