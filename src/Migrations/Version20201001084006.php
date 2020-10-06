<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201001084006 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE mix_ingredients (mix_id INT NOT NULL, ingredients_id INT NOT NULL, INDEX IDX_C5978E56A6013C4A (mix_id), INDEX IDX_C5978E563EC4DCE (ingredients_id), PRIMARY KEY(mix_id, ingredients_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE mix_ingredients ADD CONSTRAINT FK_C5978E56A6013C4A FOREIGN KEY (mix_id) REFERENCES mix (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE mix_ingredients ADD CONSTRAINT FK_C5978E563EC4DCE FOREIGN KEY (ingredients_id) REFERENCES ingredients (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE mix_ingredients');
    }
}
