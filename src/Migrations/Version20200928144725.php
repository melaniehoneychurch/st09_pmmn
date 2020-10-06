<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200928144725 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE ingredients_recipe (ingredients_id INT NOT NULL, recipe_id INT NOT NULL, INDEX IDX_8C552A6B3EC4DCE (ingredients_id), INDEX IDX_8C552A6B59D8A214 (recipe_id), PRIMARY KEY(ingredients_id, recipe_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE ingredients_recipe ADD CONSTRAINT FK_8C552A6B3EC4DCE FOREIGN KEY (ingredients_id) REFERENCES ingredients (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE ingredients_recipe ADD CONSTRAINT FK_8C552A6B59D8A214 FOREIGN KEY (recipe_id) REFERENCES recipe (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE ingredients ADD product_id INT NOT NULL');
        $this->addSql('ALTER TABLE ingredients ADD CONSTRAINT FK_4B60114F4584665A FOREIGN KEY (product_id) REFERENCES product (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_4B60114F4584665A ON ingredients (product_id)');
        $this->addSql('ALTER TABLE mix ADD recipe_id INT NOT NULL');
        $this->addSql('ALTER TABLE mix ADD CONSTRAINT FK_55AFA88159D8A214 FOREIGN KEY (recipe_id) REFERENCES recipe (id)');
        $this->addSql('CREATE INDEX IDX_55AFA88159D8A214 ON mix (recipe_id)');
        $this->addSql('ALTER TABLE recipe ADD description VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE report ADD mix_id INT NOT NULL, ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE report ADD CONSTRAINT FK_C42F7784A6013C4A FOREIGN KEY (mix_id) REFERENCES mix (id)');
        $this->addSql('ALTER TABLE report ADD CONSTRAINT FK_C42F7784A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_C42F7784A6013C4A ON report (mix_id)');
        $this->addSql('CREATE INDEX IDX_C42F7784A76ED395 ON report (user_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE ingredients_recipe');
        $this->addSql('ALTER TABLE ingredients DROP FOREIGN KEY FK_4B60114F4584665A');
        $this->addSql('DROP INDEX UNIQ_4B60114F4584665A ON ingredients');
        $this->addSql('ALTER TABLE ingredients DROP product_id');
        $this->addSql('ALTER TABLE mix DROP FOREIGN KEY FK_55AFA88159D8A214');
        $this->addSql('DROP INDEX IDX_55AFA88159D8A214 ON mix');
        $this->addSql('ALTER TABLE mix DROP recipe_id');
        $this->addSql('ALTER TABLE recipe DROP description');
        $this->addSql('ALTER TABLE report DROP FOREIGN KEY FK_C42F7784A6013C4A');
        $this->addSql('ALTER TABLE report DROP FOREIGN KEY FK_C42F7784A76ED395');
        $this->addSql('DROP INDEX IDX_C42F7784A6013C4A ON report');
        $this->addSql('DROP INDEX IDX_C42F7784A76ED395 ON report');
        $this->addSql('ALTER TABLE report DROP mix_id, DROP user_id');
    }
}
