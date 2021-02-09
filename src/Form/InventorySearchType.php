<?php

namespace App\Form;

use App\Entity\InventorySearch;
use App\Entity\Storage;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SearchType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class InventorySearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', SearchType::class, [
                'required' => false,
                'label' => false,
            ])
            ->add('owner', EntityType::class,[
                'class' => User::class,
                'choice_label' => 'identity',
                'multiple' => false,
                'required' => false,
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
            ->add('storage', EntityType::class, [
                'class' => Storage::class,
                'choice_label' => 'name',

                'required' => false,
                'label' => false,
            ])
            ->add('entrydate', DateType::class,[
                'widget' => 'single_text',
                'input'  => 'datetime',
                'required' => false
            ])
            ->add('including', ChoiceType::class, [
                'choices'  => [
                    'Products and solutions' => null,
                    'Products' => 'p',
                    'Solutions' => 'm'
                ],
                'label' => 'Include in search :'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => InventorySearch::class,
            'method' => 'get',
            'csrf_protection' => false,
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}
