import { ICategory } from '../category/category.interface';
import { IImage } from '../image/image.interface';

export class IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  type: string;
  brand: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
  categories?: ICategory[];
  images?: IImage[];
}