import { ICategory } from './category.interface';
import { IsNumber, IsString, IsNotEmpty, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
