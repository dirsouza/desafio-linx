import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { parseToInt, parseTypeDB } from './utils';
import { Product } from './product/product.entity';
import { Category } from './category/category.entity';
import { Image } from './image/image.entity';
import { ProductModule } from './product/product.module';
import { CategoryModule } from "./category/category.module";
import { ImageModule } from "./image/image.module";

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
      entities: [Product, Category, Image],
      logging: ['error'],
      cache: {
        type: 'redis',
        options: {
          host: process.env.CACHE_HOST,
          port: parseToInt(process.env.CACHE_PORT) || 6379,
        },
        alwaysEnabled: true,
        duration: 6000,
      },
      autoLoadEntities: true,
    }),
    CacheModule.register({
      store: redisStore,
      host: process.env.CACHE_HOST,
      port: parseToInt(process.env.CACHE_PORT) || 6379,
      ttl: parseToInt(process.env.CACHE_TTL) || 6,
    }),
    ProductModule,
    CategoryModule,
    ImageModule
  ],
})
export class AppModule {}
