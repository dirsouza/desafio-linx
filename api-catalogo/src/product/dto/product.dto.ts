import { IProduct } from "../interface/IProduct";
import { CategoryDto } from "../../category/dto/category.dto";
import { ImageDto } from "../../image/dto/image.dto";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductDto implements IProduct {

  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly oldPrice: number;

  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  readonly brand: string;

  @IsString()
  @IsNotEmpty()
  readonly status: string;

  readonly categories?: CategoryDto[];
  readonly images?: ImageDto[];
}
