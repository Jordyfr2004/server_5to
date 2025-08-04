import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitasModule } from './citas/citas.module';
import { DoctorModule } from './doctor/doctor.module';
import { HorariosModule } from './horarios/horarios.module';

@Module({
  imports: [CitasModule, DoctorModule, HorariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
