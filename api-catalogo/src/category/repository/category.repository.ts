import { EntityRepository, Repository } from "typeorm";
import { Category } from "../entity/category.entity";
import { CategoryDto } from "../dto/category.dto";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {

  async createCategory(categoryDto: CategoryDto): Promise<CategoryDto> {
    try {
      return await this.save(categoryDto);
    } catch (e) {
      throw e;
    }
  }

  async findAll(): Promise<CategoryDto[]> {
    try {
      return await this.find();
    } catch (e) {
      throw e;
    }
  }

}
