import { Module } from '@nestjs/common';
import { TipoReportesService } from './tipo-reportes.service';
import { TipoReportesController } from './tipo-reportes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoReporte } from './entities/tipo-reporte.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TipoReporte])],
  controllers: [TipoReportesController],
  providers: [TipoReportesService],
})
export class TipoReportesModule {}
