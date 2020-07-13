import { Module, CacheModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as redisStore from 'cache-manager-redis-store';
import { parseToInt, parseTypeDB } from "./utils";
import { Product } from "./product/entity/product.entity";
import { Category } from "./category/entity/category.entity";
import { Image } from "./image/entity/image.entity";
import { ProductModule } from './product/product.module';
import { SeederModule } from './seeder/seeder.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: parseTypeDB(process.env.DB_TYPE),
      host: process.env.DB_HOST,
      port: parseToInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Product, Category, Image],
      charset: 'utf8mb4_unicode_ci',
      synchronize: true,
      logging: ['error'],
      autoLoadEntities: true,
    }),
    CacheModule.register({
      store: redisStore,
      host: process.env.CACHE_HOST,
      port: parseToInt(process.env.CACHE_PORT) || 6379,
      ttl: parseToInt(process.env.CACHE_TTL) || 6,
    }),
    ProductModule,
    SeederModule,
  ],
})
export class AppModule {}
