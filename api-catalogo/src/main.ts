import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { Logger, ValidationPipe } from "@nestjs/common";
import { parseToInt } from "./utils";
import { ConfigService } from "@nestjs/config";
import { SeederModule } from "./seeder/seeder.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.setGlobalPrefix('catalogo');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*'
  });
  app.use(compression());
  await app.listen(parseToInt(configService.get<string>('CATALOGO_PORT')) || 3000);
  Logger.verbose(`Catalogo API is running on: ${await app.getUrl()}`);
  await app.get(SeederModule).run();
}
bootstrap();
