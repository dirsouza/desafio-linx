import { Category, Image, Product } from "../entity";

export const formatProduct = async (line: any): Promise<Product> => {
  const { id, name, description, price, oldPrice, type, brand, status } = line;
  return { id, name, description, price, oldPrice, type, brand, status };
}

export const formatCategory = async (line: any, product: Product): Promise<Category[]> => {
  const { categories } = line;
  Object.assign(categories, categories.map(c => ({ name: c.name, product })));
  return categories;
}

export const formatImage = async (line: any, product: Product): Promise<Image[]> => {
  const { images } = line;
  const imagesKeys = Object.keys(images);
  const listImages = [];
  for (const key of imagesKeys) {
  listImages.push({
    url: images[key],
    default: key === 'default',
    product,
  });
}
return listImages;
}
