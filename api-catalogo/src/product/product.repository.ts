import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductDto } from './product.dto';
import { FormatCompact } from "./format.compact";
import { FormatComplete } from "./format.complete";
import { FormatQuery } from "./format.query";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  private readonly actionFormat = {
    compact: () => new FormatCompact(),
    complete: () => new FormatComplete()
  }

  async findById(id: number, format: string): Promise<ProductDto> {
    try {
      return await new FormatQuery(id, this, this.actionFormat[format]())
        .query();
    } catch (e) {
      throw e;
    }
  }
}
