<?php

namespace App\Form;


use App\Entity\Mix;
use App\Entity\Recipe;
use App\Entity\Storage;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Core\Security;

class MixType extends AbstractType
{
    private $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Title',
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description of your solution',
            ])
            ->add('quantity')
            ->add('recipe', EntityType::class, [
                'class' => Recipe::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                        ->andWhere('u.author=:author')
                        ->setParameter('author', $this->security->getUser())
                        ->orderBy('u.title', 'ASC');
                },
                'choice_label' => 'title',
                'multiple' => false,
                'required' => false,
            ])
            ->add('storage', EntityType::class,[
                'class' => Storage::class,
                'choice_label' => 'name',
                'required' => true,
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
