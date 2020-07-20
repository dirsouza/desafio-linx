import { EntityRepository, Repository } from 'typeorm';
import { Category } from './category.entity';
import { CategoryDto } from './category.dto';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  async findByProduct(id: number): Promise<CategoryDto[]> {
    try {
      return await this.find({
        where: { product: id },
        order: { name: 'ASC' },
      });
    } catch (e) {
      throw e;
    }
  }
}
