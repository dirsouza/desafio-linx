import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiQuery, ApiOkResponse } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ProductDto } from "./product.dto";
import { Format } from '../utils';

@ApiTags('Produtos')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  @ApiQuery({ name: 'format', enum: Format })
  @ApiOkResponse({ type: ProductDto })
  getProductById(
    @Param('id') id: number,
    @Query('format') format = 'complete'
  ): Promise<ProductDto> {
    return this.productService.findProductById(id, format);
  }
}
