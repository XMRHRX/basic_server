import { MigrationInterface, QueryRunner, Table } from "typeorm";
export class Init1615878322530 implements MigrationInterface {
    public async createTable(queryRunner: QueryRunner): Promise<void>{
      // await queryRunner.createTable(new Table({
        // name: 'page',
        // columns: [
          // {
            // isPrimary: true,
            // name: '_id', type: 'int'
          // },
          // {
            // name: 'URL', type: 'TEXT'
          // },
          // {
            // name: 'fileName', type: 'TEXT'
          // }
        // ]
      // }), true);
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
      await this.createTable(queryRunner);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      //await queryRunner.query("ALTER TABLE `page` DROP COLUMN `city`");
    }

}
