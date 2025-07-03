import { Module } from '@nestjs/common';
import { AgendaEventsService } from './agenda-events.service';
import { AgendaEventsResolver } from './agenda-events.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendaEvent } from './entities/agenda-event.entity';

@Module({
  providers: [AgendaEventsResolver, AgendaEventsService],
  imports:[TypeOrmModule.forFeature([AgendaEvent])],
  exports: [TypeOrmModule]
})
export class AgendaEventsModule {}
