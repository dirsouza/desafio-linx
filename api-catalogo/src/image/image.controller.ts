import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ImageService } from './image.service';
import { ImageDto } from './image.dto';

@ApiTags('Imagens')
@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get('product/:id')
  @ApiOkResponse({ type: ImageDto, isArray: true })
  getImagesByProduct(@Param('id') id: number): Promise<ImageDto[]> {
    return this.imageService.findImageByProduct(id);
  }
}
