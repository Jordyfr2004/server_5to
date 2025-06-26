import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgendaEventoDto } from './dto/create-agenda-evento.dto';
import { UpdateAgendaEventoDto } from './dto/update-agenda-evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AgendaEvento } from './entities/agenda-evento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AgendaEventosService {

  constructor(
    @InjectRepository(AgendaEvento)
    private readonly agendaRepository: Repository<AgendaEvento>
  ){}
  
  async create(createAgendaEventoDto: CreateAgendaEventoDto) {
    const agenda = this.agendaRepository.create(createAgendaEventoDto);
    return await this.agendaRepository.save(agenda);
  }

  async findAll() {
    return await this.agendaRepository.find();
  }

  async findOne(id: number) {
    const evento = await this.agendaRepository.findOne({where:{id}});
    if (!evento) {
      throw new NotFoundException(`Evento en la agenda con ID ${id} no encontrado`)
    }
    return evento;
  }

  async update(id: number, updateAgendaEventoDto: UpdateAgendaEventoDto) {
    const evento = await this.findOne(id);
    this.agendaRepository.merge(evento, updateAgendaEventoDto);
    return await this.agendaRepository.save(evento);
  }

  async remove(id: number) {
    const evento = await this.findOne(id);
    await this.agendaRepository.remove(evento);
    return { message: `Evento con ID ${id} eliminado correctamente de la agenda` };
  }
}
