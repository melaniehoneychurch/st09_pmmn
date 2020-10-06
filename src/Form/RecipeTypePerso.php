<?php

namespace App\Form;

use App\Entity\Ingredients;
use App\Entity\Product;
use App\Entity\Storage;
use App\Entity\TrashCan;
use App\Entity\Pictogram;
use App\Entity\HazardStatement;
use App\Entity\Recipe;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class RecipeTypePerso extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
            ->add('visibility')
            ->add('ingredients', EntityType::class,[
                'class' => Ingredients::class,
                'choice_label' => 'name',
                'required' => false,
            ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Recipe::class,
            'translation_domain' => 'forms',
        ]);
    }

}
