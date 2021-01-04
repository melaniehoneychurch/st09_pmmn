<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201214150925 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE risk_of_use (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, product_id INT DEFAULT NULL, mix_id INT DEFAULT NULL, use_at DATETIME NOT NULL, INDEX IDX_66479A08A76ED395 (user_id), INDEX IDX_66479A084584665A (product_id), INDEX IDX_66479A08A6013C4A (mix_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE risk_of_use ADD CONSTRAINT FK_66479A08A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE risk_of_use ADD CONSTRAINT FK_66479A084584665A FOREIGN KEY (product_id) REFERENCES product (id)');
        $this->addSql('ALTER TABLE risk_of_use ADD CONSTRAINT FK_66479A08A6013C4A FOREIGN KEY (mix_id) REFERENCES mix (id)');
        $this->addSql('DROP INDEX name ON family');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_A5E6215B5E237E06 ON family (name)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE risk_of_use');
        $this->addSql('DROP INDEX uniq_a5e6215b5e237e06 ON family');
        $this->addSql('CREATE UNIQUE INDEX name ON family (name)');
    }
}
