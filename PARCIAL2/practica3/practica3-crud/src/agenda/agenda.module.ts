import { Module } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { AgendaGateway } from './agenda.gateway';
import { Agenda } from './entities/agenda.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([Agenda])],
  providers: [AgendaGateway, AgendaService],
})
export class AgendaModule {}
