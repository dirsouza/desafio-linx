import { EntityRepository, Repository } from 'typeorm';
import { Image } from './image.entity';
import { ImageDto } from './image.dto';

@EntityRepository(Image)
export class ImageRepository extends Repository<Image> {
  async createImage(imageDto: ImageDto): Promise<ImageDto> {
    try {
      return await this.save(imageDto);
    } catch (e) {
      throw e;
    }
  }

  async findByProduct(id: number): Promise<ImageDto[]> {
    try {
      return await this.find({
        where: { product: id },
        order: { default: 'DESC' },
      });
    } catch (e) {
      throw e;
    }
  }
}