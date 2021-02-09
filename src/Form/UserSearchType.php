<?php

namespace App\Form;

use App\Entity\UserSearch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SearchType;

class UserSearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('username', SearchType::class, [
                'required' => false,
                'label' => 'Username',
            ])
            ->add('name', SearchType::class, [
                'required' => false,
                'label' => 'Firstname',
            ])
            ->add('familyName', SearchType::class, [
                'required' => false,
                'label' => 'Lastname',
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
            'data_class' => UserSearch::class,
        ]);
    }
}
