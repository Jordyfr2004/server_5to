import { Module } from '@nestjs/common';
import { ReportTypesService } from './report-types.service';
import { ReportTypesGateway } from './report-types.gateway';
import { ReportType } from './entities/report-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ReportTypesGateway, ReportTypesService],
  imports:[TypeOrmModule.forFeature([ReportType])],
  exports:[TypeOrmModule]
})
export class ReportTypesModule {}
