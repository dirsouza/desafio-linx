import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageRepository } from './image.repository';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ImageRepository])],
  providers: [ImageService],
  exports: [ImageService],
  controllers: [ImageController],
})
export class ImageModule {}
