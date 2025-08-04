import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cita } from './entities/cita.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitasService {

  constructor(
    @InjectRepository(Cita)
    private readonly citaRepository: Repository<Cita>
  ) {}

  async create(createCitaDto: CreateCitaDto) {
    const cita = this.citaRepository.create(createCitaDto);
    return await this.citaRepository.save(cita);
  }

  async findAll() {
    return await this.citaRepository.find();
  }

  async findOne(id: number) {
    const cita = await this.citaRepository.findOne({ where: { id } });
    if (!cita) {
      throw new NotFoundException(`Cita with ID ${id} not found`);
    }
    return cita;
  }

  async update(id: number, updateCitaDto: UpdateCitaDto) {
    const cita = await this.findOne(id);
    if (!cita) {
      throw new NotFoundException(`Cita with ID ${id} not found`);
    }
    Object.assign(cita, updateCitaDto);
    return await this.citaRepository.save(cita);
  }

  async remove(id: number) {
    const cita = await this.findOne(id);
    if (!cita) {
      throw new NotFoundException(`Cita with ID ${id} not found`);
    }
    await this.citaRepository.remove(cita);
  }
}
