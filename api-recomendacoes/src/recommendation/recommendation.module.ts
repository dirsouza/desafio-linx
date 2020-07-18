import { HttpModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RecommendationController } from './recommendation.controller';
import { RecommendationService } from './recommendation.service';
import { MicroserviceModule } from "../microservice/microservice.module";

@Module({
  imports: [
    ConfigModule,
    HttpModule.register({
      timeout: 5000,
    }),
    MicroserviceModule,
  ],
  controllers: [RecommendationController],
  providers: [RecommendationService]
})
export class RecommendationModule {}
