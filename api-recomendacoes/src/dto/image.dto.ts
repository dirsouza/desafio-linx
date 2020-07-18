import { IImage } from '../interface';
import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsDate,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ImageDto implements IImage {
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
  readonly url: string;

  @IsBoolean()
  @ApiProperty({
    type: Boolean,
  })
  readonly default: boolean;

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
