import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //for global validation
  app.useGlobalPipes(new ValidationPipe({whitelist: true}));

  //for global set of prefix (i.e. api/v1) in every route 
  app.setGlobalPrefix("api/v1");
  await app.listen(3001);
}
bootstrap();
