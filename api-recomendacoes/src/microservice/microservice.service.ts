import { HttpService, Injectable } from "@nestjs/common";

@Injectable()
export class MicroserviceService {
  constructor(private readonly httpService: HttpService) {}

  findRecommendations(ranking: string) {
    return this.httpService.get(`${ranking}.json`);
  }
}
