import { Module } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CitasResolver } from './citas.resolver';

@Module({
  providers: [CitasResolver, CitasService],
})
export class CitasModule {}
