import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdministratorInput } from './dto/create-administrator.input';
import { UpdateAdministratorInput } from './dto/update-administrator.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrator } from './entities/administrator.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdministratorService {

  constructor(
    @InjectRepository(Administrator)
    private readonly administratorRepository: Repository<Administrator>
  ){}

  async create(createAdministratorInput: CreateAdministratorInput): Promise<Administrator> {
    const admin = this.administratorRepository.create(createAdministratorInput);
    return this.administratorRepository.save(admin);
  }

  findAll(): Promise<Administrator[]> {
    return this.administratorRepository.find();
  }

  async findOne(id: string): Promise<Administrator> {
    const admin = await this.administratorRepository.findOne({ where: {id}});
    if (!admin){
      throw new NotFoundException (`Administrator with id ${id} not found`)
    } 
    return admin;
  }

  async update(id: string, updateAdministratorInput: UpdateAdministratorInput):Promise<Administrator>{
    const admin = await this.administratorRepository.preload(updateAdministratorInput);
    if (!admin) {
      throw new Error('administrador no encontrado');
    }
    return  this.administratorRepository.save(admin);
  }

  async remove(id: string): Promise<Administrator> {
  const admin = await this.administratorRepository.findOne({where:{id}});
  if (!admin) {
    throw new Error("administrador no encontrado");
  }
  await this.administratorRepository.remove(admin);
  return {...admin,id};
}
}
