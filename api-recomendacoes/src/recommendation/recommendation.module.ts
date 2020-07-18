import { HttpModule, Module } from "@nestjs/common";
import { RecommendationController } from './recommendation.controller';
import { RecommendationService } from './recommendation.service';
import { parseToInt } from "../utils";
import { MicroserviceModule } from "../microservice/microservice.module";

@Module({
  imports: [
    HttpModule.register({
      baseURL: `${process.env.CATALOGO_HOST}:${parseToInt(process.env.CATALOGO_PORT)}`,
      timeout: 5000,
    }),
    MicroserviceModule,
  ],
  controllers: [RecommendationController],
  providers: [RecommendationService]
})
export class RecommendationModule {}
