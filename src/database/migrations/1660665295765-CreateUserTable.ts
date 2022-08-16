import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1660665295765 implements MigrationInterface {
  name = 'CreateUserTable1660665295765';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" (
            "id" BIGSERIAL NOT NULL, 
            "firstName" character varying(50) NOT NULL, 
            "lastName" character varying(50) NOT NULL, 
            "email" character varying(100) NOT NULL, 
            "password" character varying NOT NULL, 
            "lastSeenAt" TIMESTAMP, 
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), 
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
            CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" 
            PRIMARY KEY ("id")
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
