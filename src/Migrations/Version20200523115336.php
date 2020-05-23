<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200523115336 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE product (id INT AUTO_INCREMENT NOT NULL, storage_id INT NOT NULL, trash_can_id INT NOT NULL, image_name_formula VARCHAR(255) DEFAULT NULL, french_name VARCHAR(255) NOT NULL, english_name VARCHAR(255) DEFAULT NULL, nomenclature VARCHAR(255) DEFAULT NULL, other_name VARCHAR(255) DEFAULT NULL, cas_number VARCHAR(255) DEFAULT NULL, molar_mass DOUBLE PRECISION DEFAULT NULL, density DOUBLE PRECISION DEFAULT NULL, melting_temperature DOUBLE PRECISION DEFAULT NULL, boiling_temperature DOUBLE PRECISION DEFAULT NULL, optical_index DOUBLE PRECISION DEFAULT NULL, autoflame_temperature DOUBLE PRECISION DEFAULT NULL, risk_of_use LONGTEXT DEFAULT NULL, dangerous_mixtures LONGTEXT DEFAULT NULL, french_commentary LONGTEXT DEFAULT NULL, updated_at DATETIME NOT NULL, INDEX IDX_D34A04AD5CC5DB90 (storage_id), INDEX IDX_D34A04ADB3849AC3 (trash_can_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_pictogram (product_id INT NOT NULL, pictogram_id INT NOT NULL, INDEX IDX_384017D24584665A (product_id), INDEX IDX_384017D216B7C33B (pictogram_id), PRIMARY KEY(product_id, pictogram_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_hazard_statement (product_id INT NOT NULL, hazard_statement_id INT NOT NULL, INDEX IDX_7E2CABA34584665A (product_id), INDEX IDX_7E2CABA39B15C424 (hazard_statement_id), PRIMARY KEY(product_id, hazard_statement_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pictogram (id INT AUTO_INCREMENT NOT NULL, image_name VARCHAR(255) DEFAULT NULL, update_at DATETIME NOT NULL, type VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE hazard_statement (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, text LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE storage (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE trash_can (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD5CC5DB90 FOREIGN KEY (storage_id) REFERENCES storage (id)');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04ADB3849AC3 FOREIGN KEY (trash_can_id) REFERENCES trash_can (id)');
        $this->addSql('ALTER TABLE product_pictogram ADD CONSTRAINT FK_384017D24584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_pictogram ADD CONSTRAINT FK_384017D216B7C33B FOREIGN KEY (pictogram_id) REFERENCES pictogram (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_hazard_statement ADD CONSTRAINT FK_7E2CABA34584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_hazard_statement ADD CONSTRAINT FK_7E2CABA39B15C424 FOREIGN KEY (hazard_statement_id) REFERENCES hazard_statement (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE product_pictogram DROP FOREIGN KEY FK_384017D24584665A');
        $this->addSql('ALTER TABLE product_hazard_statement DROP FOREIGN KEY FK_7E2CABA34584665A');
        $this->addSql('ALTER TABLE product_pictogram DROP FOREIGN KEY FK_384017D216B7C33B');
        $this->addSql('ALTER TABLE product_hazard_statement DROP FOREIGN KEY FK_7E2CABA39B15C424');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD5CC5DB90');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04ADB3849AC3');
        $this->addSql('DROP TABLE product');
        $this->addSql('DROP TABLE product_pictogram');
        $this->addSql('DROP TABLE product_hazard_statement');
        $this->addSql('DROP TABLE pictogram');
        $this->addSql('DROP TABLE hazard_statement');
        $this->addSql('DROP TABLE storage');
        $this->addSql('DROP TABLE trash_can');
    }
}
