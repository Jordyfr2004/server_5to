import { Module } from '@nestjs/common';
import { DonantesController } from './donantes.controller';
import { DonantesService } from './donantes.service';
import { NatsModule } from '../transports/nats.module'; // ✅ Importar el módulo NATS

@Module({
  imports: [NatsModule], // ✅ Aquí
  controllers: [DonantesController],
  providers: [DonantesService],
})
export class DonantesModule {}
