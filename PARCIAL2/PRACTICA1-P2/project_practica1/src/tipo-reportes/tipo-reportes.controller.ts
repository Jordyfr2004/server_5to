import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoReportesService } from './tipo-reportes.service';
import { CreateTipoReporteDto } from './dto/create-tipo-reporte.dto';
import { UpdateTipoReporteDto } from './dto/update-tipo-reporte.dto';

@Controller('tipo-reportes')
export class TipoReportesController {
  constructor(private readonly tipoReportesService: TipoReportesService) {}

  @Post()
  create(@Body() createTipoReporteDto: CreateTipoReporteDto) {
    return this.tipoReportesService.create(createTipoReporteDto);
  }

  @Get()
  findAll() {
    return this.tipoReportesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoReportesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoReporteDto: UpdateTipoReporteDto) {
    return this.tipoReportesService.update(+id, updateTipoReporteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoReportesService.remove(+id);
  }
}
