import { HttpModule, Module } from "@nestjs/common";
import { MicroserviceService } from './microservice.service';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule,
    HttpModule.register({
      timeout: 5000,
    }),
  ],
  providers: [MicroserviceService],
  exports: [MicroserviceService],
})
export class MicroserviceModule {}
