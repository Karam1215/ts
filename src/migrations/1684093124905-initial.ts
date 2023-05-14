import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1684093124905 implements MigrationInterface {
    name = 'Initial1684093124905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, CONSTRAINT "UQ_f1ab7cf3a5714dbc6bb4e1c28a4" UNIQUE ("id"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("order_id" SERIAL NOT NULL, "serviceName" character varying NOT NULL, "price" integer NOT NULL, "prodName" character varying NOT NULL, "clientId" integer, "clientsId" integer, CONSTRAINT "PK_cad55b3cb25b38be94d2ce831db" PRIMARY KEY ("order_id"))`);
        await queryRunner.query(`CREATE TABLE "goods" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "orderOrderId" integer, CONSTRAINT "UQ_105e56546afe0823fa08df0baf7" UNIQUE ("id"), CONSTRAINT "PK_105e56546afe0823fa08df0baf7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_1457f286d91f271313fded23e53" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_f25af0b3ffd89c7431f167bad20" FOREIGN KEY ("clientsId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "goods" ADD CONSTRAINT "FK_adb9b69401eafcc4d0f80943520" FOREIGN KEY ("orderOrderId") REFERENCES "orders"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "goods" DROP CONSTRAINT "FK_adb9b69401eafcc4d0f80943520"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_f25af0b3ffd89c7431f167bad20"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_1457f286d91f271313fded23e53"`);
        await queryRunner.query(`DROP TABLE "goods"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
