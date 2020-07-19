import { Controller, Get, Query } from "@nestjs/common";
import { ApiOkResponse, ApiQuery, ApiTags } from "@nestjs/swagger";
import { RecommendationService } from "./recommendation.service";
import { Format, Ranking } from "../utils";
import { ProductDto } from "../dto";

@ApiTags('Recomendações')
@Controller('recommendations')
export class RecommendationController {
  constructor(private readonly recommendationService: RecommendationService) {}

  @Get()
  @ApiQuery({ name: 'format', enum: Format, required: false })
  @ApiQuery({ name: 'ranking', enum: Ranking, required: false })
  @ApiQuery({ name: 'maxProducts', type: Number, required: false })
  @ApiOkResponse({ type: ProductDto, isArray: true })
  getRecommendations(
    @Query('maxProducts') maxProducts = 10,
    @Query('ranking') ranking = 'mostpopular',
    @Query('format') format = 'complete',
  ) {
    return this.recommendationService
      .findRecommendations(maxProducts, ranking, format);
  }
}
