import { ICategory } from "../interface";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CategoryDto implements ICategory {
  @IsNumber()
  @ApiProperty({
    type: Number,
  })
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  readonly name: string;

  @IsDate()
  @ApiProperty({
    type: String,
  })
  readonly createdAt?: Date;

  @IsDate()
  @ApiProperty({
    type: String,
  })
  readonly updatedAt?: Date;
}
