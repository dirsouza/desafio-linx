import { IFormatStrategy } from "./format-strategy.interface";
import { ProductRepository } from "./product.repository";
import { ProductDto } from "./product.dto";

export class FormatQuery {
  private readonly id: number;
  private readonly repository: ProductRepository;
  private readonly formatStrategy: IFormatStrategy;

  constructor(id: number, repository: ProductRepository, formatFactory: IFormatStrategy) {
    this.id = id;
    this.repository = repository;
    this.formatStrategy = formatFactory;
  }

  async query(): Promise<ProductDto> {
    return await this.formatStrategy
      .execQuery(this.id, this.repository);
  }
}
