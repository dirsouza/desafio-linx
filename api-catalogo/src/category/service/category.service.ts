import { Injectable } from '@nestjs/common';
import { Connection } from "typeorm";
import { CategoryRepository } from "../repository/category.repository";
import { CategoryDto } from "../dto/category.dto";

@Injectable()
export class CategoryService {

  private categoryRepository: CategoryRepository

  constructor(
    private readonly connection: Connection
  ) {
    this.categoryRepository = connection.getCustomRepository(CategoryRepository);
  }

  async createCategory(categoryDto: CategoryDto): Promise<CategoryDto> {
    return await this.categoryRepository.createCategory(categoryDto);
  }

  async findAll(): Promise<CategoryDto[]> {
    try {
      return await this.categoryRepository.findAll();
    } catch (e) {
      throw e;
    }
  }

}
