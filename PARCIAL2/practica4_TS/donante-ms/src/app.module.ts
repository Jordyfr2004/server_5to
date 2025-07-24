import { Module } from '@nestjs/common';
import { DonantesModule } from './donantes/donantes.module';

@Module({
  imports: [DonantesModule],
})
export class AppModule {}
