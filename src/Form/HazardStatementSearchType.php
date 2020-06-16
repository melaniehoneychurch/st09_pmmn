<?php

namespace App\Form;

use App\Entity\HazardStatementSearch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SearchType;

class HazardStatementSearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('code', SearchType::class, [
            'required' => false,
            'label' => false,
            'attr' => [
                'placeholder' => "Code mention de danger"
            ]
        ])
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
            'data_class' => HazardStatementSearch::class,
        ]);
    }
}
