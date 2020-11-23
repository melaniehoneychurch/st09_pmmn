<?php

namespace App\Form;

use App\Entity\Product;
use App\Entity\Storage;
use App\Entity\TrashCan;
use App\Entity\Pictogram;
use App\Entity\HazardStatement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('securityFormFile', FileType::class, [
                'required' => false,
            ])
            ->add('formulaImageFile', FileType::class, [
                'required' => false,
            ])
            ->add('colorName', ChoiceType::class, [
                'choices' => Product::COLOR,
                'required' => false,
            ])
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
                'required' => false,
            ])
            ->add('storage', EntityType::class,[
                'class' => Storage::class,
                'choice_label' => 'name',
                'required' => true,
            ])
            ->add('trashCan', EntityType::class,[
                'class' => TrashCan::class,
                'choice_label' => 'name',
                'required' => true,
            ])
            ->add('hazardStatements', EntityType::class,[
                'class' => HazardStatement::class,
                'choice_label' => 'code',
                'multiple' => true,
                'expanded' => true,
                'required' => false,
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
