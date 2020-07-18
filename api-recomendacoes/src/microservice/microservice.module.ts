import { HttpModule, Module } from "@nestjs/common";
import { MicroserviceService } from './microservice.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: process.env.MICROSERVICE_HOST,
      timeout: 5000,
    }),
  ],
  providers: [MicroserviceService],
  exports: [MicroserviceService],
})
export class MicroserviceModule {}
