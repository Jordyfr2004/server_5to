import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { Agenda } from './entities/agenda.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AgendaService {

  constructor(
    @InjectRepository(Agenda)
    private readonly agendaRepository: Repository<Agenda>
  ){}

  create(createAgendaDto: CreateAgendaDto){
    return  this.agendaRepository.save(this.agendaRepository.create(createAgendaDto));
  }

  findAll(){
    return this.agendaRepository.find();
  }

  findOne(id: number) {
    return this.agendaRepository.findOne({ where: {id}}).then((agend) => {
      if (!agend) {
        throw new NotFoundException(`Agenda con ID ${id} no encontrado`);
      }
      return agend;
    });
  }

  update(id: number, updateAgendaDto: UpdateAgendaDto) {
    return this.findOne(id).then((agend) =>{
      const updateAgenda = this.agendaRepository.merge(agend, updateAgendaDto);
      return this.agendaRepository.save(updateAgenda)
    });
  }

  remove(id: number) {
    return  this.findOne(id).then((agend)=> {
      return this.agendaRepository.remove(agend).then(() =>{
        return `Agenda con ID ${id} eliminado correctamente`;
      })
    });
  }
}
