import { Injectable } from '@nestjs/common';
import { CreateDoctorInput } from './dto/create-doctor.input';
import { UpdateDoctorInput } from './dto/update-doctor.input';
import { Doctor } from './entities/doctor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {

  constructor(
    @InjectRepository(Doctor)
    private  readonly doctorRepository: Repository<Doctor>,
  ){}

  async create(createDoctorInput: CreateDoctorInput): Promise<Doctor> {
    const doctor = this.doctorRepository.create(createDoctorInput);
    return this.doctorRepository.save(doctor);
  }

  async findAll(): Promise<Doctor[]> {
    return this.doctorRepository.find();
  }

  async findOne(id: string): Promise<Doctor> {
    const doctor = await this.doctorRepository.findOne({ where: { id } });
    if (!doctor) {
      throw new Error(`Doctor with ID ${id} not found`);
    }
    return doctor;
  }

  async update(id: string, updateDoctorInput: UpdateDoctorInput): Promise<Doctor> {
    await this.doctorRepository.update(id, updateDoctorInput);
    const doctor = await this.doctorRepository.findOne({ where: { id } });
    if (!doctor) {
      throw new Error(`Doctor with ID ${id} not found`);
    }
    return doctor;
  }

  async remove(id: string): Promise<Doctor> {
    const doctor = await this.doctorRepository.findOne({ where: { id } });
    if (!doctor) {
      throw new Error(`Doctor with ID ${id} not found`);
    }
    await this.doctorRepository.remove(doctor);
    return doctor;
  }
}
