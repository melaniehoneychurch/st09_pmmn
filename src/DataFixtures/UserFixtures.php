<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    /**
     *
     * @var UserPasswordEncoderInterface
     */
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        // test - user
        $user = new User();
        $user->setUsername('test')
            ->setPassword($this->encoder->encodePassword($user, 'test'))
            ->setName('testName')
            ->setFamilyName('testFamilyName')
            ->setEmailAddress('test@email.com')
            ->setPhone('0612345678')
        ;
        $manager->persist($user);

        // admin - admin
        $user2 = new User();
        $user2->setUsername('admin')
            ->setPassword($this->encoder->encodePassword($user, 'admin'))
            ->setName('adminName')
            ->setFamilyName('adminFamilyName')
            ->setEmailAddress('admin@email.com')
            ->setPhone('0612345678')
            ->addRole('ROLE_ADMIN')
        ;
        $manager->persist($user2);

        $manager->flush();
    }
}
