<?php

namespace App\Form;

use App\Entity\Inventory;
use App\Entity\Product;
use App\Entity\Storage;
use App\Entity\User;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class InventoryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('product', EntityType::class,[
                'class' => Product::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                        ->orderBy('u.frenchName', 'ASC');
                },
                'choice_label' => 'frenchName',
                'multiple' => false,
                'required' => true,
            ])
            ->add('dosage')
            ->add('quantity')
            ->add('owner', EntityType::class,[
                'class' => User::class,
                'choice_label' => 'identity',
                'multiple' => false,
                'required' => true,
                ])
            ->add('storage', EntityType::class,[
                'class' => Storage::class,
                'choice_label' => 'name',
                'required' => true,
            ])
           /* ->add('mix', EntityType::class,[
                'class' => Mix::class,
                'choice_label' => 'title',
                'multiple' => false,
                'required' => false,
            ]) */
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Inventory::class,
            'translation_domain' => 'forms',
        ]);
    }
}
