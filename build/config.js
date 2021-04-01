"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { page } from './entry/page';
const page_1 = require("@/entry/page");
exports.default = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'user',
    password: 'ThinkPad',
    database: 'webpages',
    entities: [
        page_1.page,
    ],
    migrations: ['src/migrations/*.ts'],
    migrationsRun: true,
    synchronize: false,
    logging: 'all'
};
//# sourceMappingURL=config.js.map