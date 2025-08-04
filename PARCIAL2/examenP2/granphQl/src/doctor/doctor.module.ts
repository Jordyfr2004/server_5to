import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorResolver } from './doctor.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';

@Module({
  providers: [DoctorResolver, DoctorService],
  imports: [TypeOrmModule.forFeature([Doctor])],
  exports: [TypeOrmModule]
})
export class DoctorModule {}
