import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReportTypeInput } from './dto/create-report-type.input';
import { UpdateReportTypeInput } from './dto/update-report-type.input';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportType } from './entities/report-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReportTypeService {

  constructor(
    @InjectRepository(ReportType)
    private readonly reportRepository: Repository<ReportType>
  ){}

  async create(createReportTypeInput: CreateReportTypeInput): Promise<ReportType> {
    const reporte = this.reportRepository.create(createReportTypeInput);
    return this.reportRepository.save(reporte);
  }

  findAll():Promise<ReportType[]> {
    return this.reportRepository.find();
  }

  async findOne(id: string):Promise<ReportType> {
    const report = await this.reportRepository.findOne({ where: {id}});
    if (!report){
      throw new NotFoundException(`Report with id ${id} not found`)
    }
    return report;
  }

  async update(id: string, updateReportTypeInput: UpdateReportTypeInput):Promise<ReportType> {
    const report = await this.reportRepository.preload(updateReportTypeInput);
    if (!report) {
      throw new Error('administrador no encontrado');
    }
    return this.reportRepository.save(report);
  }

  async remove(id: string):Promise<ReportType> {
    const report = await this.reportRepository.findOne({where:{id}});
    if (!report){
      throw new Error('Tipo de reporte y contenido no cencontrado');
    }
    await this.reportRepository.remove(report);
    return {...report,id};
  }
}
