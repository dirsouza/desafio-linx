import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { ProductRepository } from './product.repository';
import { Product } from "./product.entity";
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  private productRepository: ProductRepository;

  constructor(private readonly connection: Connection) {
    this.productRepository = this.connection.getCustomRepository(
      ProductRepository,
    );
  }

  async findProductById(id: number, format: string): Promise<ProductDto> {
    return await this.productRepository.findById(id, format);
  }
}
