import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { envs } from './config/envs';

async function bootstrap() {
  const logger = new Logger('Gateway');

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); // todas las rutas serán /api/...

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ignora campos no definidos en los DTOs
      forbidNonWhitelisted: true, // lanza error si envías campos desconocidos
    }),
  );

  await app.listen(envs.PORT);
  logger.log(`✅ Gateway corriendo en http://localhost:${envs.PORT}/api`);
}
bootstrap();
