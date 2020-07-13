import { ICategory } from "../../category/interfaces/category.interface";
import { IImage } from "../../image/interfaces/image.interface";

export class IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  type: string;
  brand: string;
  status: string;
  categories?: ICategory[];
  images?: IImage[];
}
