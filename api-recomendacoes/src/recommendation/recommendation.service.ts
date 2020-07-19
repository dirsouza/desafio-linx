import { HttpService, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MicroserviceService } from "../microservice/microservice.service";
import { ProductDto } from "../dto";

@Injectable()
export class RecommendationService {
  private readonly baseUrl: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly microserviceService: MicroserviceService
  ) {
    const host = this.configService.get<string>('CATALOGO_HOST');
    const port = this.configService.get<string>('CATALOGO_PORT');
    const prefix = this.configService.get<string>('CATALOGO_PREFIX');

    this.baseUrl = `${host}:${port}/${prefix}`;
  }

  async findRecommendations(maxProducts: number, ranking: string, format: string):
    Promise<ProductDto[]>
  {
    try {
      const recommendations = Object.assign([], await this.microserviceService
        .findRecommendations(ranking));

      if (recommendations.length) {
        return await this.findProducts(maxProducts, recommendations, format);
      }
    } catch (e) {
      throw e;
    }
  }

  async findProducts(maxProducts: number, recommendations: number[], format: string):
    Promise<ProductDto[]>
  {
    try {
      const products: ProductDto[] = [];

      for (const id of recommendations) {
        const prod = await this.httpService.get(`${this.baseUrl}/products/${id}?format=${format}`)
          .toPromise()
          .then(({ data }) => data)
          .catch(err => {
            throw err;
          });

        if (prod !== '') {
          products.push(prod as ProductDto);
        }
      }

      Object.assign([],
        products.map(prod =>
          prod.status === 'AVAILABLE' || prod.status === 'available'
        )
      )

      return products
        .splice(0, maxProducts >= 10 ? maxProducts : 10);
    } catch (e) {
      throw e;
    }
  }
}
