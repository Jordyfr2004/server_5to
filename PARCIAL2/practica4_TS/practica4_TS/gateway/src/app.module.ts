import { Module } from '@nestjs/common';
import { DonantesModule } from './donantes/donantes.module';
import { NatsModule } from './transports/nats.module';
import { AdministradorModule } from './administrador/administrador.module';

@Module({
  imports: [DonantesModule, NatsModule, AdministradorModule],
})
export class AppModule {}
