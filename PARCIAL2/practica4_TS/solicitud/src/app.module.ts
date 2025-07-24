import { Module } from '@nestjs/common';
import { SolicitudModule } from './solicitud/solicitud.module';

@Module({
  imports: [SolicitudModule],
})
export class AppModule {}


