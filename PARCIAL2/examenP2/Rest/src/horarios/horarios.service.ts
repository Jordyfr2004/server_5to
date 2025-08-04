import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Horario } from './entities/horario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HorariosService {

  constructor(
    @InjectRepository(Horario)
    private readonly horarioRepository: Repository<Horario>
  ) {}

  async create(createHorarioDto: CreateHorarioDto) {
    const horario = this.horarioRepository.create(createHorarioDto);
    return await this.horarioRepository.save(horario);
  }

  async findAll() {
    return await this.horarioRepository.find();
  }

  async findOne(id: number) {
    const horario = await this.horarioRepository.findOne({ where: { id } });
    if (!horario) {
      throw new NotFoundException(`Horario with ID ${id} not found`);
    }
    return horario;
  }

  async update(id: number, updateHorarioDto: UpdateHorarioDto) {
    const horario = await this.findOne(id);
    if (!horario) {
      throw new NotFoundException(`Horario with ID ${id} not found`);
    }
    Object.assign(horario, updateHorarioDto);
    return await this.horarioRepository.save(horario);
  }

  async remove(id: number) {
    const horario = await this.findOne(id);
    if (!horario) {
      throw new NotFoundException(`Horario with ID ${id} not found`);
    }
    await this.horarioRepository.remove(horario);
  }
}
