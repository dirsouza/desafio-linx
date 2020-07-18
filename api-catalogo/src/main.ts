import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { parseToInt } from './utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('catalogo');
  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*',
  });

  const configService = app.get(ConfigService);

  SwaggerModule.setup(
    'api-catalogo',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('API Catalogo')
        .setDescription('API para fornecer dados do Catalogo')
        .setVersion('1.0')
        .build(),
    ),
  );

  await app.listen(
    parseToInt(configService.get<string>('CATALOGO_PORT')) || 3000,
  );
  const getUrl = await app.getUrl();

  Logger.verbose(`API Catalogo is running on: ${getUrl}`);
  Logger.verbose(`Document API Catalogo is running on: ${getUrl}/api-catalogo`);
}
bootstrap();
