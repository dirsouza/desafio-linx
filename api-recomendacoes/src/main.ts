import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { parseToInt } from './utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('recomendacao');
  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*',
  });

  const configService = app.get(ConfigService);

  SwaggerModule.setup(
    'api-recomendacao',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('API Recomendação')
        .setDescription('API para fornecer dados de Recomendações')
        .setVersion('1.0')
        .build(),
    ),
  );

  await app.listen(
    parseToInt(configService.get<string>('RECOMENDACAO_PORT')) || 3001,
  );
  const getUrl = await app.getUrl();

  Logger.verbose(`API Recomendação is running on: ${getUrl}`);
  Logger.verbose(`Document API Recomendação is running on: ${getUrl}/api-recomendacao`);
}
bootstrap();
