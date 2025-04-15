import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserEntity1744738043104 implements MigrationInterface {
    name = 'UpdateUserEntity1744738043104'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "senha"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "tipo"`);
        await queryRunner.query(`DROP TYPE "public"."users_tipo_enum"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."users_type_enum" AS ENUM('psicologo', 'responsavel')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "type" "public"."users_type_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthDate" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_230b925048540454c8b4c481e1c"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."users_type_enum"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`CREATE TYPE "public"."users_tipo_enum" AS ENUM('psicologo', 'responsavel')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "tipo" "public"."users_tipo_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "senha" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "nome" character varying NOT NULL`);
    }

}
