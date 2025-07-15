import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReportTypeDto } from './dto/create-report-type.dto';
import { UpdateReportTypeDto } from './dto/update-report-type.dto';
import { ReportType } from './entities/report-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReportTypesService {

  constructor(
    @InjectRepository(ReportType)
    private readonly reporteRepository: Repository<ReportType>
  ){}

  create(createReportTypeDto: CreateReportTypeDto){
    return this.reporteRepository.save(this.reporteRepository.create(createReportTypeDto));
  }

  findAll(){
    return this.reporteRepository.find();
  }

  findOne(id: number) {
    return this.reporteRepository.findOne({ where: {id}}).then((reportes)=> {
      if (!reportes) {
        throw new NotFoundException(`Reporte con ID ${id} no encontrado`)
      }
      return reportes
    });
  }

  update(id: number, updateReportTypeDto: UpdateReportTypeDto) {
    return this.findOne(id).then((reportes) =>{
      const updateReportes = this.reporteRepository.merge(reportes, updateReportTypeDto)
      return this.reporteRepository.save(updateReportes)
    });
  }

  remove(id: number) {
    return this.findOne(id).then((reportes)=> {
      return this.reporteRepository.remove(reportes).then(() =>{
        return `Repoerte con ID ${id} eliminado correctamente`;
      })
    });
  }
}
