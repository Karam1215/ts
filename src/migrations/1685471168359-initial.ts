import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685471168359 implements MigrationInterface {
    name = 'Initial1685471168359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_b1e477e88a3f7b66c9b27eda02c"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME COLUMN "Cl_Id" TO "clientId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_1457f286d91f271313fded23e53" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_1457f286d91f271313fded23e53"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME COLUMN "clientId" TO "Cl_Id"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_b1e477e88a3f7b66c9b27eda02c" FOREIGN KEY ("Cl_Id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
