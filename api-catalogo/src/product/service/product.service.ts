import { Injectable } from '@nestjs/common';
import { Connection } from "typeorm";
import { ProductRepository } from "../repository/product.repository";
import { ProductDto } from "../dto/product.dto";
import { Format } from "../../utils";

@Injectable()
export class ProductService {

  private productRepository: ProductRepository

  constructor(
    private readonly connection: Connection
  ) {
    this.productRepository = this.connection.getCustomRepository(ProductRepository);
  }

  async createProduct(productDto: ProductDto): Promise<ProductDto> {
    return await this.productRepository.createProduct(productDto);
  }

  async findById(id: number, format: Format): Promise<ProductDto> {
    return await this.productRepository.findById(id, format);
  }

}
