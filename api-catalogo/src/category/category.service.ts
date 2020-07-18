import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CategoryRepository } from './category.repository';
import { CategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  private categoryRepository: CategoryRepository;

  constructor(private readonly connection: Connection) {
    this.categoryRepository = connection.getCustomRepository(
      CategoryRepository,
    );
  }

  async createCategory(categoryDto: CategoryDto): Promise<CategoryDto> {
    try {
      return await this.categoryRepository.createCategory(categoryDto);
    } catch (e) {
      throw e;
    }
  }

  async findCategoryByProduct(id: number): Promise<CategoryDto[]> {
    try {
      return await this.categoryRepository.findByProduct(id);
    } catch (e) {
      throw e;
    }
  }
}
