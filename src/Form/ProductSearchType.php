<?php

namespace App\Form;

use App\Entity\ProductSearch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SearchType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class ProductSearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('frenchName', SearchType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Nom produit'
                ]
            ])
            ->add('casNumber', SearchType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Numero cas'
                ]
            ])
            ->add('storage', SearchType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Stockage'
                ]
            ])
            ->add('trashCan', SearchType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Poubelle'
                ]
            ])
            ->add('alphabet', ChoiceType::class, [
                'choices'  => [
                    'A à Z' => 0,
                    'Z à A' => 1
                ],
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'ABC'
                ]
            ])
            ->add('date', ChoiceType::class, [
                'choices'  => [
                    'plus récent' => 0,
                    'moins récent' =>1
                ],
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Date'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ProductSearch::class,
            'method' => 'get',
            'csrf_protection' => false,
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}
