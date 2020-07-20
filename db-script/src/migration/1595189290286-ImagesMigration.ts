import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ImagesMigration1595189290286 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "images",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
        },
        {
          name: "url",
          type: "varchar",
        },
        {
          name: "default",
          type: "boolean",
          default: false,
        },
        {
          name: "productId",
          type: "varchar",
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()",
        },
        {
          name: "updated_at",
          type: "timestamp",
          default: "now()",
        }
      ],
      indices: [
        {
          name: "IDX_IMAGE_URL",
          columnNames: ["url"],
        },
      ],
      foreignKeys: [
        {
          columnNames: ["productId"],
          referencedTableName: "products",
          referencedColumnNames: ["id"],
        },
      ],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images', true, true, true);
  }

}
