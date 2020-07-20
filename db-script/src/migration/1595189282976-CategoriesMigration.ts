import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CategoriesMigration1595189282976 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "categories",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true
        },
        {
          name: "name",
          type: "varchar"
        },
        {
          name: "productId",
          type: "varchar"
        },
        {
          name: "created_at",
          type: "timestamp",
          default: 'now()',
        },
        {
          name: "updated_at",
          type: "timestamp",
          default: 'now()',
        }
      ],
      indices: [
        {
          name: 'IDX_CATEGORY_NAME',
          columnNames: ['name'],
        },
      ],
      foreignKeys: [
        {
          columnNames: ['productId'],
          referencedTableName: 'products',
          referencedColumnNames: ['id'],
        },
      ],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories', true, true, true);
  }

}
