<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201110164306 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE mix ADD storage_id INT DEFAULT NULL, ADD quantity VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE mix ADD CONSTRAINT FK_55AFA8815CC5DB90 FOREIGN KEY (storage_id) REFERENCES storage (id)');
        $this->addSql('CREATE INDEX IDX_55AFA8815CC5DB90 ON mix (storage_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE mix DROP FOREIGN KEY FK_55AFA8815CC5DB90');
        $this->addSql('DROP INDEX IDX_55AFA8815CC5DB90 ON mix');
        $this->addSql('ALTER TABLE mix DROP storage_id, DROP quantity');
    }
}
