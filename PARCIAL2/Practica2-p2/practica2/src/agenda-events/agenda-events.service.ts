import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgendaEventInput } from './dto/create-agenda-event.input';
import { UpdateAgendaEventInput } from './dto/update-agenda-event.input';
import { InjectRepository } from '@nestjs/typeorm';
import { AgendaEvent } from './entities/agenda-event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AgendaEventsService {

  constructor(
    @InjectRepository(AgendaEvent)
    private readonly agendaEventRepository: Repository<AgendaEvent>
  ){}

  async create(createAgendaEventInput: CreateAgendaEventInput): Promise<AgendaEvent> {
    const agenda = this.agendaEventRepository.create(createAgendaEventInput);
    return  this.agendaEventRepository.save(agenda);
  }

  findAll(): Promise<AgendaEvent[]> {
    return this.agendaEventRepository.find();
  }

  async findOne(id: string):Promise<AgendaEvent> {
    const agenda = await this.agendaEventRepository.findOne({where: {id}});
    if (!agenda){
      throw new NotFoundException(`Evento with id ${id} not found`)
    }
    return agenda;
  }

  async update(id: string, updateAgendaEventInput: UpdateAgendaEventInput):Promise<AgendaEvent> {
    const agenda = await this.agendaEventRepository.preload(updateAgendaEventInput);
    if (!agenda) {
      throw new Error('Evento en agenda no encontrado');
    }
    return  this.agendaEventRepository.save(agenda);
  }

  async remove(id: string): Promise<AgendaEvent> {
    const agenda = await this.agendaEventRepository.findOne({where:{id}});
    if (!agenda) {
      throw new Error("evento en agenda no encontrado");
    }
    await this.agendaEventRepository.remove(agenda);
    return {...agenda,id};
  }

}
