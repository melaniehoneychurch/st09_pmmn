<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200523090358 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE product (id INT AUTO_INCREMENT NOT NULL, filename_formula VARCHAR(255) DEFAULT NULL, french_name VARCHAR(255) NOT NULL, english_name VARCHAR(255) DEFAULT NULL, nomenclature VARCHAR(255) DEFAULT NULL, other_name VARCHAR(255) DEFAULT NULL, cas_number VARCHAR(255) DEFAULT NULL, molar_mass DOUBLE PRECISION DEFAULT NULL, density DOUBLE PRECISION DEFAULT NULL, melting_temperature DOUBLE PRECISION DEFAULT NULL, boiling_temperature DOUBLE PRECISION DEFAULT NULL, optical_index DOUBLE PRECISION DEFAULT NULL, autoflame_temperature DOUBLE PRECISION DEFAULT NULL, formula VARCHAR(255) DEFAULT NULL, risk_of_use LONGTEXT DEFAULT NULL, dangerous_mixtures LONGTEXT DEFAULT NULL, french_commentary LONGTEXT DEFAULT NULL, english_commentary LONGTEXT DEFAULT NULL, danger_frame_color VARCHAR(255) DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, qr_code VARCHAR(255) DEFAULT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_pictogram (product_id INT NOT NULL, pictogram_id INT NOT NULL, INDEX IDX_384017D24584665A (product_id), INDEX IDX_384017D216B7C33B (pictogram_id), PRIMARY KEY(product_id, pictogram_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pictogram (id INT AUTO_INCREMENT NOT NULL, image_name VARCHAR(255) DEFAULT NULL, update_at DATETIME NOT NULL, type VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE product_pictogram ADD CONSTRAINT FK_384017D24584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_pictogram ADD CONSTRAINT FK_384017D216B7C33B FOREIGN KEY (pictogram_id) REFERENCES pictogram (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE product_pictogram DROP FOREIGN KEY FK_384017D24584665A');
        $this->addSql('ALTER TABLE product_pictogram DROP FOREIGN KEY FK_384017D216B7C33B');
        $this->addSql('DROP TABLE product');
        $this->addSql('DROP TABLE product_pictogram');
        $this->addSql('DROP TABLE pictogram');
    }
}
