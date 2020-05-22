<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200522143535 extends AbstractMigration
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
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE product');
    }
}
