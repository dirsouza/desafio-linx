import { IFormatStrategy } from "./format-strategy.interface";
import { ProductRepository } from "./product.repository";
import { ProductDto } from "./product.dto";

export class FormatComplete implements IFormatStrategy {
  async execQuery(id: number, repository: ProductRepository): Promise<ProductDto> {
    return await repository.createQueryBuilder('prod')
      .leftJoinAndSelect('prod.categories', 'ctg')
      .leftJoinAndSelect('prod.images', 'img')
      .orderBy('ctg.name')
      .addOrderBy('img.default', 'DESC')
      .where('prod.id = :id', { id })
      .getOne();
  }
}
