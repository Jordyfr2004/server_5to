import { Module } from '@nestjs/common';
import { ReportTypeService } from './report-type.service';
import { ReportTypeResolver } from './report-type.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportType } from './entities/report-type.entity';

@Module({
  
  providers: [ReportTypeResolver, ReportTypeService],
  imports:[TypeOrmModule.forFeature([ReportType])],
  exports:[TypeOrmModule]
})
export class ReportTypeModule {}
