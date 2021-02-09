<?php


namespace App\Form;


use App\Entity\ScanSearch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ScanSearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('code', TextType::class, [
            'label' => 'If the scan does not work, type in the search bar the code of the product or the solution (this is the code written under the QR Code, ex: P56):'
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ScanSearch::class,
            'method' => 'get',
            'csrf_protection' => false,
        ]);
    }

}