<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200523100622 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE product_hazard_statement (product_id INT NOT NULL, hazard_statement_id INT NOT NULL, INDEX IDX_7E2CABA34584665A (product_id), INDEX IDX_7E2CABA39B15C424 (hazard_statement_id), PRIMARY KEY(product_id, hazard_statement_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE hazard_statement (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, text LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE product_hazard_statement ADD CONSTRAINT FK_7E2CABA34584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_hazard_statement ADD CONSTRAINT FK_7E2CABA39B15C424 FOREIGN KEY (hazard_statement_id) REFERENCES hazard_statement (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE product_hazard_statement DROP FOREIGN KEY FK_7E2CABA39B15C424');
        $this->addSql('DROP TABLE product_hazard_statement');
        $this->addSql('DROP TABLE hazard_statement');
    }
}
