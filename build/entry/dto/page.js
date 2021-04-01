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
exports.Page = void 0;
const typeorm_1 = require("typeorm");
let Page = class Page {
    constructor(param = {}) {
        const { _id, session, URL, //www.google.com/hi
        //site, //www.google.com
        //domain, //google.com
        //uri,  //hi
        DOM } = param;
        this._id = _id;
        this.session = session;
        this.URL = URL;
        //this.site = site;
        //this.domain = domain;
        //this.uri = uri;
        this.DOM = DOM;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment', {
        type: 'int',
        unsigned: true,
    }),
    __metadata("design:type", Number)
], Page.prototype, "_id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        collation: 'utf8_unicode_ci',
        nullable: false
    }),
    __metadata("design:type", String)
], Page.prototype, "session", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 256,
        collation: 'utf8_unicode_ci',
        nullable: false
    }),
    __metadata("design:type", String)
], Page.prototype, "URL", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 5000,
        collation: 'utf8_unicode_ci',
        nullable: true
    }),
    __metadata("design:type", String)
], Page.prototype, "DOM", void 0);
Page = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Page])
], Page);
exports.Page = Page;
//# sourceMappingURL=page.js.map