import { IFormatStrategy } from "./format-strategy.interface";
import { ProductRepository } from "./product.repository";
import { ProductDto } from "./product.dto";
import { joinAliasWithName } from "../utils";

export class FormatCompact implements IFormatStrategy {
  async execQuery(id: number, repository: ProductRepository): Promise<ProductDto> {
    return await repository.createQueryBuilder('prod')
      .select(joinAliasWithName('prod', ['name', 'price', 'status']))
      .leftJoinAndSelect('prod.categories', 'ctg')
      .orderBy('ctg.name')
      .where('prod.id = :id', { id })
      .getOne();
  }
}
