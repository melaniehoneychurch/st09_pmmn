<?php

namespace App\Form;

use App\Entity\MixSearch;
use App\Entity\Storage;
use App\Entity\TrashCan;
use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SearchType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class MixSearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', SearchType::class, [
                'required' => false,
            ])
            ->add('creator', EntityType::class,[
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
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => MixSearch::class,
            'method' => 'get',
            'csrf_protection' => false,
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}
