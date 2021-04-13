import {
	MigrationInterface, QueryRunner, Table
} from "typeorm";

class Init1615878322530 implements MigrationInterface {
    public async createTable(queryRunner: QueryRunner): Promise<void>{
      await queryRunner.createTable(new Table({
        name: 'page',
        columns: [
          {
            isPrimary: true,
            name: '_id', type: 'int'
          },
          {
            name: 'url', type: 'text'
          },
          {
            name: 'GET_param', type: 'text'
          },
          {
            name: 'content', type: 'text'
          }
        ]
      }), true);
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
      await this.createTable(queryRunner);
      await queryRunner.query("ALTER TABLE `page` ADD `city` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `page` DROP COLUMN `city`");
    }

}
export default Init1615878322530;
