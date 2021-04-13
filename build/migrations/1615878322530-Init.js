"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class Init1615878322530 {
    async createTable(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
    async up(queryRunner) {
        await this.createTable(queryRunner);
        await queryRunner.query("ALTER TABLE `page` ADD `city` varchar(255) NOT NULL");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `page` DROP COLUMN `city`");
    }
}
exports.default = Init1615878322530;
//# sourceMappingURL=1615878322530-Init.js.map