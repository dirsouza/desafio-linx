import { ICategory } from "../interfaces/category.interface";
import { IsNumber, IsString, IsNotEmpty } from "class-validator";

export class CategoryDto implements ICategory {
  @IsNumber()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
