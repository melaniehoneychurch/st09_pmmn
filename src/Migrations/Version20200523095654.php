<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200523095654 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE trash_can (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, color VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('DROP TABLE product_storage');
        $this->addSql('ALTER TABLE product ADD storage_id INT NOT NULL, ADD trash_can_id INT NOT NULL');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD5CC5DB90 FOREIGN KEY (storage_id) REFERENCES storage (id)');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04ADB3849AC3 FOREIGN KEY (trash_can_id) REFERENCES trash_can (id)');
        $this->addSql('CREATE INDEX IDX_D34A04AD5CC5DB90 ON product (storage_id)');
        $this->addSql('CREATE INDEX IDX_D34A04ADB3849AC3 ON product (trash_can_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04ADB3849AC3');
        $this->addSql('CREATE TABLE product_storage (product_id INT NOT NULL, storage_id INT NOT NULL, INDEX IDX_85A300844584665A (product_id), INDEX IDX_85A300845CC5DB90 (storage_id), PRIMARY KEY(product_id, storage_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE product_storage ADD CONSTRAINT FK_85A300844584665A FOREIGN KEY (product_id) REFERENCES product (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_storage ADD CONSTRAINT FK_85A300845CC5DB90 FOREIGN KEY (storage_id) REFERENCES storage (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('DROP TABLE trash_can');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD5CC5DB90');
        $this->addSql('DROP INDEX IDX_D34A04AD5CC5DB90 ON product');
        $this->addSql('DROP INDEX IDX_D34A04ADB3849AC3 ON product');
        $this->addSql('ALTER TABLE product DROP storage_id, DROP trash_can_id');
    }
}
