import { HttpService, Injectable } from "@nestjs/common";

@Injectable()
export class RecommendationService {
  constructor(private readonly httpService: HttpService) {}
}
