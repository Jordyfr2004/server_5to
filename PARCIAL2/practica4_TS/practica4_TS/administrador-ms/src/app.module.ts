import { Module } from '@nestjs/common';
import { AdministradorModule } from './administrador/administrador.module';

@Module({
  imports: [AdministradorModule],
})
export class AppModule {}
