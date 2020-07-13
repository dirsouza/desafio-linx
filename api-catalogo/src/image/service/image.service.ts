import { Injectable } from '@nestjs/common';
import { Connection } from "typeorm";
import { ImageRepository } from "../repository/image.repository";
import { ImageDto } from "../dto/image.dto";

@Injectable()
export class ImageService {

  private imageRepository: ImageRepository

  constructor(
    private readonly connection: Connection
  ) {
    this.imageRepository = connection.getCustomRepository(ImageRepository);
  }

  async createImage(imageDto: ImageDto): Promise<ImageDto> {
    return await this.imageRepository.createImage(imageDto);
  }

}
