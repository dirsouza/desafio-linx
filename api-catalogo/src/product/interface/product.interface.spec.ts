import { IProduct } from './IProduct';

describe('ProductInterface', () => {
  it('should be defined', () => {
    expect(new IProduct()).toBeDefined();
  });
});
