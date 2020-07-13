import { EntityRepository, Repository } from "typeorm";
import { Image } from "../entity/image.entity";
import { ImageDto } from "../dto/image.dto";

@EntityRepository(Image)
export class ImageRepository extends Repository<Image> {

  async createImage(imageDto: ImageDto): Promise<ImageDto> {
    try {
      return await this.save(imageDto);
    } catch (e) {
      throw e;
    }
  }

}
