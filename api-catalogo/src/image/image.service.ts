import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { ImageRepository } from './image.repository';
import { ImageDto } from './image.dto';

@Injectable()
export class ImageService {
  private imageRepository: ImageRepository;

  constructor(private readonly connection: Connection) {
    this.imageRepository = connection.getCustomRepository(ImageRepository);
  }

  async findImageByProduct(id: number): Promise<ImageDto[]> {
    try {
      return await this.imageRepository.findByProduct(id);
    } catch (e) {
      throw e;
    }
  }
}
