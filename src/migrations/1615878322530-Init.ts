import { MigrationInterface, QueryRunner, Table } from "typeorm";
export class Init1615878322530 implements MigrationInterface {
    public async createTable(queryRunner: QueryRunner): Promise<void>{
      await queryRunner.createTable(new Table({
        name: 'Environment',
        columns: [
          {
            isPrimary: true, name: '_id', type: 'int', width: 10, unsigned: true, isGenerated: true, generationStrategy: 'increment',
          },
          {
            name: 'humidity', type: 'double', collation: 'utf8_unicode_ci', isNullable: true, default: 'NULL',
          },
        ],
      }), true);

      await queryRunner.createTable(new Table({
        name: 'Crop',
        columns: [
          {
            isPrimary: true, name: '_id', type: 'int', width: 10, unsigned: true, isGenerated: true, generationStrategy: 'increment',
          },
          {
            name: 'name', type: 'text', collation: 'utf8_unicode_ci',
          },
          {
            name: 'season', type: 'text', collation: 'utf8_unicode_ci',
          },
          {
            name: 'max_humidity', type: 'double', collation: 'utf8_unicode_ci',
          },
          {
            name: 'min_humidity', type: 'double', collation: 'utf8_unicode_ci',
          },
          {
            name: 'max_ultra_ray', type: 'double', collation: 'utf8_unicode_ci',
          },
          {
            name: 'min_ultra_ray', type: 'double', collation: 'utf8_unicode_ci',
          },
          {
            name: 'max_temperature', type: 'double', collation: 'utf8_unicode_ci',
          },
          {
            name: 'min_temperature', type: 'double', collation: 'utf8_unicode_ci',
          },
        ],
      }), true);
      console.log('finish create table ------------------------')
    }

    public async insertConstData(queryRunner: QueryRunner): Promise<void>{
      // await queryRunner.query('INSERT INTO `Crop` ( `name`, `season`, `max_humidity`, `min_humidity`, `max_ultra_ray`, `min_ultra_ray`, `max_temperature`, `min_temperature`) VALUES ("test", "冬", 40, 10, 50, 10, 50, 10)');
      await queryRunner.query('INSERT INTO `Crop` ( `name`, `season`, `max_humidity`, `min_humidity`, `max_ultra_ray`, `min_ultra_ray`, `max_temperature`, `min_temperature`) VALUES ("高麗菜","冬",100,50,7, 0, 35,15)');
      await queryRunner.query('INSERT INTO `Crop` ( `name`, `season`, `max_humidity`, `min_humidity`, `max_ultra_ray`, `min_ultra_ray`, `max_temperature`, `min_temperature`) VALUES ("青椒","春",75,20,8, 3, 35,20)');
      await queryRunner.query('INSERT INTO `Crop` ( `name`, `season`, `max_humidity`, `min_humidity`, `max_ultra_ray`, `min_ultra_ray`, `max_temperature`, `min_temperature`) VALUES ("茄子","夏",85,30,8, 4, 40,22)');
      await queryRunner.query('INSERT INTO `Crop` ( `name`, `season`, `max_humidity`, `min_humidity`, `max_ultra_ray`, `min_ultra_ray`, `max_temperature`, `min_temperature`) VALUES ("苦瓜","夏",75,20,10, 5, 35,20)');
      await queryRunner.query('INSERT INTO `Crop` ( `name`, `season`, `max_humidity`, `min_humidity`, `max_ultra_ray`, `min_ultra_ray`, `max_temperature`, `min_temperature`) VALUES ("芹菜","冬", 65,25,10, 6, 45,15)');
      await queryRunner.query('INSERT INTO `Crop` ( `name`, `season`, `max_humidity`, `min_humidity`, `max_ultra_ray`, `min_ultra_ray`, `max_temperature`, `min_temperature`) VALUES ("洋蔥","夏",86,25,9, 4, 36,20)');
      await queryRunner.query('INSERT INTO `Crop` ( `name`, `season`, `max_humidity`, `min_humidity`, `max_ultra_ray`, `min_ultra_ray`, `max_temperature`, `min_temperature`) VALUES ("辣椒","秋",70,30,11, 5, 40,25)');
      await queryRunner.query('INSERT INTO `Crop` ( `name`, `season`, `max_humidity`, `min_humidity`, `max_ultra_ray`, `min_ultra_ray`, `max_temperature`, `min_temperature`) VALUES ("白菜","冬",75,48,6, 0, 35,5)');
      await queryRunner.query('INSERT INTO `Crop` ( `name`, `season`, `max_humidity`, `min_humidity`, `max_ultra_ray`, `min_ultra_ray`, `max_temperature`, `min_temperature`) VALUES ("甜菜","冬",87,25,9, 2, 29,10)');
      await queryRunner.query('INSERT INTO `Crop` ( `name`, `season`, `max_humidity`, `min_humidity`, `max_ultra_ray`, `min_ultra_ray`, `max_temperature`, `min_temperature`) VALUES ("馬鈴薯","秋",50,15,11, 5, 32,18)');
      await queryRunner.query('INSERT INTO `Crop` ( `name`, `season`, `max_humidity`, `min_humidity`, `max_ultra_ray`, `min_ultra_ray`, `max_temperature`, `min_temperature`) VALUES ("紅蘿蔔","夏",65,15,11, 4, 31,15)');
      // --------------------------

      await queryRunner.query('INSERT INTO `Environment` (`humidity`, `ultra_ray`, `temperature`, `date`) VALUES (1, 2, 3, "2021-05-27 07:07:14")');
      await queryRunner.query('INSERT INTO `Environment` (`humidity`, `ultra_ray`, `temperature`, `date`) VALUES (42, 221, 19,  "2021-02-13 07:07:14")');
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
      await this.createTable(queryRunner);
      await this.insertConstData(queryRunner);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      //await queryRunner.query("ALTER TABLE `page` DROP COLUMN `city`");
    }

}
