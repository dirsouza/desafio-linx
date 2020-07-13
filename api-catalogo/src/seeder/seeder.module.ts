import { Logger, Module } from "@nestjs/common";
import * as path from "path";
import * as countLine from 'count-lines-in-file';
import * as lineReader from 'line-reader';
import { ProductModule } from "../product/product.module";
import { CategoryModule } from "../category/category.module";
import { ImageModule } from "../image/image.module";
import { ProductService } from "../product/service/product.service";
import { CategoryService } from "../category/service/category.service";
import { ImageService } from "../image/service/image.service";
import { ProductDto } from "../product/dto/product.dto";
import { CategoryDto } from "../category/dto/category.dto";
import { ImageDto } from "../image/dto/image.dto";
import { progressBar } from "../utils";

@Module({
  imports: [
    ProductModule,
    CategoryModule,
    ImageModule,
  ],
})
export class SeederModule {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
    private readonly imageService: ImageService,
  ) {}

  async run(): Promise<void> {
    try {
      Logger.verbose("Executando seeder... Aguarde!");
      const catalog = path.resolve(__dirname, "../../catalog.json");
      countLine(catalog, (error: Error, lines: number) => {
        const bar = progressBar();
        let count = 0;
        bar.start(lines, count);

        lineReader.eachLine(catalog, { encoding: 'utf8' }, async (line, last) => {
          const catalogo = JSON.parse(line);
          const product = this.formatProduct(catalogo);
          const newProduct = await this.createProduct(product);

          if (newProduct) {
            const category = this.formatCategory(catalogo, newProduct);
            await this.createCategory(category);
            const image = this.formatImage(catalogo, newProduct);
            await this.createImage(image);
          }

          bar.update(count++);
          if (last) {
            bar.stop();
            Logger.verbose("Seeder executa com sucesso!");
          }
        });
      });
    } catch (e) {
      throw e;
    }
  }

  formatProduct(line: any): ProductDto {
    const { id, name, description, price, oldPrice, type, brand, status } = line;
    return { id, name, description, price, oldPrice, type, brand, status };
  }

  formatCategory(line: any, product: ProductDto): CategoryDto[] {
    const { categories } = line;
    Object.assign(categories, categories.map(c => ({
      name: c.name,
      product
    })));
    return categories;
  }

  formatImage(line: any, product: ProductDto): ImageDto[] {
    const { images } = line;
    const imagesKeys = Object.keys(images);
    const listImages = [];
    for (const key of imagesKeys) {
      listImages.push({
        url: images[key],
        default: key === 'default',
        product
      });
    }
    return listImages;
  }

  async createProduct(productDto: ProductDto): Promise<ProductDto> {
    try {
      return await this.productService.createProduct(productDto);
    } catch (e) {
      throw e;
    }
  }

  async createCategory(categoryDto: CategoryDto[]): Promise<void> {
    try {
      for (const category of categoryDto) {
        await this.categoryService.createCategory(category);
      }
    } catch (e) {
      throw e;
    }
  }

  async createImage(imageDto: ImageDto[]): Promise<void> {
    try {
      for (const image of imageDto) {
        await this.imageService.createImage(image);
      }
    } catch (e) {
      throw e;
    }
  }
}
