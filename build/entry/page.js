"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.page = void 0;
const typeorm_1 = require("typeorm");
let page = class page {
    constructor(param = {}) {
        const { _id, url, GET_param, content } = param;
        this._id = _id;
        this.url = url;
        this.GET_param = GET_param;
        this.content = content;
    }
    getContent() {
        return this.content;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment', {
        type: 'int',
        unsigned: true,
    }),
    __metadata("design:type", Number)
], page.prototype, "_id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text',
        collation: 'utf8_unicode_ci',
        nullable: false,
    }),
    __metadata("design:type", String)
], page.prototype, "url", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text',
        collation: 'utf8_unicode_ci',
        nullable: true,
        default: null
    }),
    __metadata("design:type", Object)
], page.prototype, "GET_param", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text',
        collation: 'utf8_unicode_ci',
        nullable: true,
        default: null
    }),
    __metadata("design:type", String)
], page.prototype, "content", void 0);
page = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [page])
], page);
exports.page = page;
//# sourceMappingURL=page.js.map