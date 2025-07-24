import { Module } from '@nestjs/common';
import { SolicitudController } from './solicitud.controller';
import { SolicitudService } from './solicitud.service';
import { NatsModule } from '../transports/nats.module';

@Module({
  imports: [NatsModule],
  controllers: [SolicitudController],
  providers: [SolicitudService],
})
export class SolicitudModule {}
