import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { parseToInt } from './utils';
import { RecommendationModule } from './recommendation/recommendation.module';
import { MicroserviceModule } from './microservice/microservice.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register({
      store: redisStore,
      host: process.env.CACHE_HOST,
      port: parseToInt(process.env.CACHE_PORT) || 6379,
      ttl: parseToInt(process.env.CACHE_TTL) || 6,
    }),
    RecommendationModule,
    MicroserviceModule,
  ],
})
export class AppModule {}
