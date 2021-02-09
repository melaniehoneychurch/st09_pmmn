<?php

namespace App\Form;

use App\Entity\Family;
use App\Entity\Product;
use App\Entity\ProductSearch;
use App\Entity\Storage;
use App\Entity\TrashCan;
use FontLib\Table\Type\name;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
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
                'label' => 'Product',
            ])
            ->add('casNumber', SearchType::class, [
                'required' => false,
                'label' => 'CAS',
            ])
            ->add('family', EntityType::class, [
                'class' => Family::class,
                'choice_label' => 'name',
                'required' => false,
            ])
            ->add('storage', EntityType::class, [
                'class' => Storage::class,
                'choice_label' => 'name',

                'required' => false,
                'label' => false,
            ])
            ->add('trashCan', EntityType::class, [
                'class' => TrashCan::class,
                'choice_label' => 'name',

                'required' => false,
                'label' => false,
            ])
            ->add('trie', ChoiceType::class, [
                'choices'  => [
                    'A → Z' => 0,
                    'Z → A' => 1,
                    'newer' => 2,
                    'older' =>3

                ],
                'required' => true,
                'label' => false,
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
