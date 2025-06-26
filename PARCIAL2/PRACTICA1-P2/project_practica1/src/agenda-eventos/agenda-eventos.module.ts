import { Module } from '@nestjs/common';
import { AgendaEventosService } from './agenda-eventos.service';
import { AgendaEventosController } from './agenda-eventos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendaEvento } from './entities/agenda-evento.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AgendaEvento])],
  controllers: [AgendaEventosController],
  providers: [AgendaEventosService],
})
export class AgendaEventosModule {}
