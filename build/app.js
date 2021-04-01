"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("@/routes");
const crawlerServices_1 = require("@/service/crawlerServices");
function AppInit(typeormConfig) {
    const app = express_1.default();
    return new Promise(async (resolve, reject) => {
        app.use(cors_1.default({
            origin: '*',
            methods: ['GET', 'POST'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        }));
        app.use(body_parser_1.default.urlencoded({
            extended: true,
        }));
        app.use(body_parser_1.default.json());
        console.log(typeormConfig);
        await typeorm_1.createConnection(typeormConfig);
        crawlerServices_1.CrawlerService.init();
        routes_1.RegisterRoutes(app);
        return resolve(app);
    });
}
exports.default = AppInit;
//# sourceMappingURL=app.js.map