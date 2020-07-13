import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ImageRepository } from "./repository/image.repository";
import { ImageService } from "./service/image.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([ImageRepository])
  ],
  providers: [ImageService],
  exports: [ImageService]
})
export class ImageModule {}
