import { Module } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorGateway } from './administrator.gateway';
import { Administrator } from './entities/administrator.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([Administrator])],
  providers: [AdministratorGateway, AdministratorService],
  exports:[AdministratorService]
})
export class AdministratorModule {}
