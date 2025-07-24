import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      url: process.env.NATS_URL,
    },
  });
  await app.startAllMicroservices();
  await app.listen(process.env.PORT || 3001);
}
bootstrap().catch((err) => {
  console.error('Error al iniciar el microservicio:', err);
});

