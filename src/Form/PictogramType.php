<?php

namespace App\Form;

use App\Entity\Pictogram;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;


class PictogramType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('imageFile', FileType::class, [
                'required' => false,
            ])
            /* ->add('updated_at') */
            ->add('type', ChoiceType::class, [
                'choices' => $this->getChoices()
            ])
            ->add('name')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Pictogram::class,
        ]);
    }

    private function getChoices()
    {
        $choices = Pictogram::TYPE;
        $output = [];
        foreach($choices as $key => $value){
            $output[$value] = $key;
        }

        return $output;
    }
}
