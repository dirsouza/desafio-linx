import { Controller, Get, Param, Query } from "@nestjs/common";
import { ProductService } from "../service/product.service";
import { Format } from "../../utils";
import { ProductDto } from "../dto/product.dto";

@Controller('products')
export class ProductController {

  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  findById(
    @Param('id') id: number,
    @Query('format') format: Format
  ): Promise<ProductDto> {
    return this.productService.findById(id, format);
  }
}
