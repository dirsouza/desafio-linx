import { EntityRepository, Repository } from 'typeorm';
import { Product } from "../entity/product.entity";
import { ProductDto } from "../dto/product.dto";
import { Format } from "../../utils";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

  async createProduct(productDto: ProductDto): Promise<ProductDto> {
    try {
      return this.findOne(productDto.id)
        .then(async res => {
          if (res) return null;
          return await this.save(productDto);
        })
        .catch(error => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  }

  async findById(id: number, format: Format): Promise<ProductDto> {
    try {
      return await this.findOne(id);
    } catch (e) {
      throw e;
    }
  }

}
