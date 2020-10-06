<?php

namespace App\Form;

use App\Entity\RecipeSearch;
use App\Entity\Storage;
use App\Entity\TrashCan;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SearchType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class RecipeSearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', SearchType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Titre recette'
                ]
            ])
            ->add('concentration', SearchType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Concentration'
                ]
            ])
            /*->add('storage', EntityType::class, [
                'class' => Storage::class,
                'choice_label' => 'name',

                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Stockage'
                ]
            ])
            ->add('trashCan', EntityType::class, [
                'class' => TrashCan::class,
                'choice_label' => 'name',

                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Poubelle'
                ]
            ])*/
            ->add('trie', ChoiceType::class, [
                'choices'  => [
                    'A à Z' => 0,
                    'Z à A' => 1,
                    'plus récent' => 2,
                    'moins récent' =>3

                ],
                'required' => true,
                'label' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => RecipeSearch::class,
            'method' => 'get',
            'csrf_protection' => false,
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}
