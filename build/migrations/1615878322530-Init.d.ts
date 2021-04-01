import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Init1615878322530 implements MigrationInterface {
    createTable(queryRunner: QueryRunner): Promise<void>;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
