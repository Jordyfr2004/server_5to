import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrador } from './entities/administrador.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdministradorService {

  constructor(
    @InjectRepository(Administrador)
    private readonly adminRepository: Repository<Administrador>
  ){}

  async create(createAdministradorDto: CreateAdministradorDto) {
    const admin = this.adminRepository.create(createAdministradorDto);
    return await this.adminRepository.save(admin);
  }

  async findAll() {
    return await this.adminRepository.find();
  }

  async findOne(id: number) {
    const admin = await this.adminRepository.findOne({where:{id}});
    if (!admin) {
      throw new NotFoundException(`Administrador con ID ${id} no encontrado`);
    }
    return admin;
  }

  async update(id: number, updateAdministradorDto: UpdateAdministradorDto) {
    const admin = await this.findOne(id);
    this.adminRepository.merge(admin, updateAdministradorDto);
    return await this.adminRepository.save(admin);
  }

  async remove(id: number) {
    const admin =await this.findOne(id);
    await this.adminRepository.remove(admin);
    return { message: `Administrador con ID ${id} eliminado correctamente` };
  }
}
