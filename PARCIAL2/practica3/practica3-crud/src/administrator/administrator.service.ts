import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrator } from './entities/administrator.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdministratorService {

  constructor(
    @InjectRepository(Administrator)
    private readonly adminstratorRepository: Repository<Administrator>
  ){}

  create(createAdministratorDto: CreateAdministratorDto){
    return this.adminstratorRepository.save(this.adminstratorRepository.create(createAdministratorDto),);
  }

  findAll(){
    return this.adminstratorRepository.find();
  }

  findOne(id: number) {
    return this.adminstratorRepository.findOne({ where: { id } }).then((admin) => {
      if (!admin) {
        throw new NotFoundException(`Administrador con ID ${id} no encontrado`);
      }
      return admin;
    });
  }

  update(id: number, updateAdministratorDto: UpdateAdministratorDto) {
    return this.findOne(id).then((admin) => {
      const updatedAdmin = this.adminstratorRepository.merge(admin, updateAdministratorDto);
      return this.adminstratorRepository.save(updatedAdmin);
    });
  }

  remove(id: number) {
    return this.findOne(id).then((admin) => {
      return this.adminstratorRepository.remove(admin).then(() => {
        return `Administrador con ID ${id} eliminado correctamente`;
      });
    });
  }
}
