import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ProductsMigration1595189268238 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "products",
      columns: [
        {
          name: "id",
          type: "varchar",
          isPrimary: true
        },
        {
          name: "name",
          type: "varchar"
        },
        {
          name: "description",
          type: "text"
        },
        {
          name: "price",
          type: "double"
        },
        {
          name: "old_price",
          type: "double"
        },
        {
          name: "type",
          type: "varchar"
        },
        {
          name: "brand",
          type: "varchar"
        },
        {
          name: "status",
          type: "varchar"
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()"
        },
        {
          name: "updated_at",
          type: "timestamp",
          default: "now()"
        }
      ],
      indices: [
        {
          name: "IDX_PRODUCT_NAME",
          columnNames: ["name"]
        }
      ]
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products", true, true, true);
  }

}
