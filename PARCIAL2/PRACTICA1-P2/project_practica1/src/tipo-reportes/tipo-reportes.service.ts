import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoReporteDto } from './dto/create-tipo-reporte.dto';
import { UpdateTipoReporteDto } from './dto/update-tipo-reporte.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoReporte } from './entities/tipo-reporte.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoReportesService {

  constructor(
    @InjectRepository(TipoReporte)
    private readonly tipoRepository: Repository<TipoReporte>
  ){}

  async create(createTipoReporteDto: CreateTipoReporteDto) {
    const tipo = this.tipoRepository.create(createTipoReporteDto);
    return await this.tipoRepository.save(tipo);
  }

  async findAll() {
    return await this.tipoRepository.find();
  }

  async findOne(id: number) {
    const tipo = await this.tipoRepository.findOne({where:{id}});
    if (!tipo) {
      throw new NotFoundException(`Tipo de reporte con ID ${id} no encontrado`)
    }
    return tipo;
  }

  async update(id: number, updateTipoReporteDto: UpdateTipoReporteDto) {
    const tipo = await this.findOne(id);
    this.tipoRepository.merge(tipo, updateTipoReporteDto);
    return await this.tipoRepository.save(tipo);
  }

  async remove(id: number) {
    const tipo = await this.findOne(id);
    await this.tipoRepository.remove(tipo);
    return { message: `Tipo de reporte con ID ${id} eliminado correctamente` };
  }
}
