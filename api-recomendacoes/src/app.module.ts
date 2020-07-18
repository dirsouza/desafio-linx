import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { parseToInt, parseTypeDB } from './utils';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: parseTypeDB(process.env.DB_TYPE),
      host: process.env.DB_HOST,
      port: parseToInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [],
      logging: ['error'],
      autoLoadEntities: true,
    }),
    CacheModule.register({
      store: redisStore,
      host: process.env.CACHE_HOST,
      port: parseToInt(process.env.CACHE_PORT) || 6379,
      ttl: parseToInt(process.env.CACHE_TTL) || 6,
    }),
  ],
})
export class AppModule {}
