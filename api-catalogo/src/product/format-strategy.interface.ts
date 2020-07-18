import { ProductRepository } from "./product.repository";
import { ProductDto } from "./product.dto";

export interface IFormatStrategy {
  execQuery(id: number, repository: ProductRepository): Promise<ProductDto>
}
