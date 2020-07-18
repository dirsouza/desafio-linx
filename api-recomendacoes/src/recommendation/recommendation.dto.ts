import { ProductDto } from "../dto";
import { MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RecommendationDto {
  @MinLength(10, {
    each: true,
  })
  @ApiProperty({
    type: ProductDto,
    isArray: true,
  })
  mostPopular: ProductDto[];

  @MinLength(10, {
    each: true,
  })
  @ApiProperty({
    type: ProductDto,
    isArray: true,
  })
  priceReduction: ProductDto[];
}
