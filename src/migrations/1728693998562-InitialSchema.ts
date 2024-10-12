import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialSchema1728693998562 implements MigrationInterface {
  name = 'InitialSchema1728693998562';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "video_game" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "genre" character varying NOT NULL, "developer" character varying NOT NULL, "publisher" character varying NOT NULL, "releaseDate" date NOT NULL, "platforms" text NOT NULL, "rating" character varying NOT NULL, CONSTRAINT "PK_a9a4de773ab2368469c5cadeac9" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "video_game"`);
  }
}
