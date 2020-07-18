import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CategoryDto } from './category.dto';

@ApiTags('Categorias')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('product/:id')
  @ApiOkResponse({ type: CategoryDto, isArray: true })
  getCategoryByProduct(@Param('id') id: number): Promise<CategoryDto[]> {
    return this.categoryService.findCategoryByProduct(id);
  }
}
