import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api/v1");

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //Remueve propiedades no declaradas en el DTO
    forbidNonWhitelisted: true, //Lanza error si el cuerpo tiene propiedades no permitidas
    transform: true, // Transforma los datos al tipo definido en el DTO
  }));
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
