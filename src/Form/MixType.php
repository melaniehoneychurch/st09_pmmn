<?php

namespace App\Form;

use App\Entity\Mix;
use App\Entity\Recipe;
use App\Entity\Storage;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MixType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
            ->add('description')
            ->add('quantity')
            ->add('recipe', EntityType::class, [
                'class' => Recipe::class,
                'choice_label' => 'title',
                'multiple' => false,
                'required' => false,
            ])
            ->add('storage', EntityType::class,[
                'class' => Storage::class,
                'choice_label' => 'name',
                'required' => false,
            ])
            ->add('confidentiality')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Mix::class,
            'translation_domain' => 'forms',
        ]);
    }
}
