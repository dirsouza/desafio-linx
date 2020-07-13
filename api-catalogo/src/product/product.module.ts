import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductRepository } from "./repository/product.repository";
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRepository])
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService]
})
export class ProductModule {}
