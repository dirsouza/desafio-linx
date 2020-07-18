import { HttpService, Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MicroserviceService {
  private readonly baseUrl: string;
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.baseUrl = this.configService.get<string>('MICROSERVICE_HOST');
  }

  async findRecommendations(ranking: string): Promise<AxiosResponse<number[]> | void> {
    try {
      return await this.httpService.get(`${this.baseUrl}/${ranking}.json`)
        .toPromise()
        .then(({ data }) =>
          Object.assign( [],
            data.map(prod => prod.recommendedProduct)
              .map(prod => prod.id)
          )
        )
        .catch(err => {
          throw err;
        });
    } catch (e) {
      throw e;
    }
  }
}
