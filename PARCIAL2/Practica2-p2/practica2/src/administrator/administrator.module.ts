import { Module } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorResolver } from './administrator.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from './entities/administrator.entity';

@Module({
  providers: [AdministratorResolver, AdministratorService],
  imports:[TypeOrmModule.forFeature([Administrator])],
  exports: [TypeOrmModule]
})
export class AdministratorModule {}
