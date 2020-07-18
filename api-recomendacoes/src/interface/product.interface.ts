import { ICategory } from "./category.interface";
import { IImage } from "./image.interface";

export interface IProduct {
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
