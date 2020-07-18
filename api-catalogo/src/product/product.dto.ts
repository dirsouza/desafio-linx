import { IProduct } from './product.interface';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryDto } from '../category/category.dto';
import { ImageDto } from '../image/image.dto';

export class ProductDto implements IProduct {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  readonly description: string;

  @IsNumber()
  @ApiProperty({
    type: Number,
  })
  readonly price: number;

  @IsNumber()
  @ApiProperty({
    type: Number,
  })
  readonly oldPrice: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  readonly brand: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  readonly status: string;

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

  @ApiProperty({
    type: CategoryDto,
    isArray: true,
  })
  readonly categories?: CategoryDto[];

  @ApiProperty({
    type: ImageDto,
    isArray: true,
  })
  readonly images?: ImageDto[];
}
