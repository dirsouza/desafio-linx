import { Controller, Get, Query } from "@nestjs/common";
import { ApiOkResponse, ApiQuery, ApiTags } from "@nestjs/swagger";
import { RecommendationService } from "./recommendation.service";
import { Ranking } from "../utils";
import { RecommendationDto } from "./recommendation.dto";

@ApiTags('Recomendações')
@Controller('recommendations')
export class RecommendationController {
  constructor(private readonly recommendationService: RecommendationService) {}

  @Get()
  @ApiQuery({ name: 'maxProducts', type: Number })
  @ApiQuery({ name: 'ranking', enum: Ranking })
  @ApiOkResponse({ type: RecommendationDto })
  getRecommendations(
    @Query('maxProducts') maxProducts: number,
    @Query('ranking') ranking: string = 'mostpopular'
  ) {}
}
