import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { parseToInt } from './utils';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register({
      store: redisStore,
      host: process.env.CACHE_HOST,
      port: parseToInt(process.env.CACHE_PORT) || 6379,
      ttl: parseToInt(process.env.CACHE_TTL) || 6,
    }),
  ],
})
export class AppModule {}
