import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePsychologistsTable1745933503923 implements MigrationInterface {
    name = 'CreatePsychologistsTable1745933503923'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "psychologists" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "specialty" character varying NOT NULL, "crv" character varying NOT NULL, "userId" uuid, CONSTRAINT "UQ_ab244fa9bdda91a42bc7f097abd" UNIQUE ("crv"), CONSTRAINT "REL_a097f8cd26b4b8726760f80298" UNIQUE ("userId"), CONSTRAINT "PK_15437f01f4bee8ec777f1d72d64" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "psychologists" ADD CONSTRAINT "FK_a097f8cd26b4b8726760f80298f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "psychologists" DROP CONSTRAINT "FK_a097f8cd26b4b8726760f80298f"`);
        await queryRunner.query(`DROP TABLE "psychologists"`);
    }

}
