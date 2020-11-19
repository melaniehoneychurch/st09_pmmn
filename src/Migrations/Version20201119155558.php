<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201119155558 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE inventory ADD storage_id INT NOT NULL');
        $this->addSql('ALTER TABLE inventory ADD CONSTRAINT FK_B12D4A365CC5DB90 FOREIGN KEY (storage_id) REFERENCES storage (id)');
        $this->addSql('CREATE INDEX IDX_B12D4A365CC5DB90 ON inventory (storage_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE inventory DROP FOREIGN KEY FK_B12D4A365CC5DB90');
        $this->addSql('DROP INDEX IDX_B12D4A365CC5DB90 ON inventory');
        $this->addSql('ALTER TABLE inventory DROP storage_id');
    }
}
