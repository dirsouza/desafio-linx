import { CategoryDto } from './category.dto';

describe('CreateCategoryDto', () => {
  it('should be defined', () => {
    expect(new CategoryDto()).toBeDefined();
  });
});
