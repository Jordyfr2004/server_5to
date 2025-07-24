import { Injectable } from '@nestjs/common';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import  {Administrador} from './entities/administrador.entity'

@Injectable()
export class AdministradorService {
  private admin : Administrador[] =[
    {
      id:1,
      nombre:'admin prueba',
      usuario: 'adminP',
      correo:'admin@gmail.com',
      password:'1213',
    },
  ]
  create(createAdministradorDto: CreateAdministradorDto) {
    const admins = {
      id: this.admin.length+1,
      ...createAdministradorDto,
    };
    this.admin.push(admins)
    return admins;
  }

  findAll() {
    return this.admin;
  }

  findOne(id: number) {
    return this.admin.find(admins => admins.id ===id);
  }

  update(id: number, updateAdministradorDto: UpdateAdministradorDto) {
    const index = this.admin.findIndex(admin => admin.id == id);
    if(index >=0){
      this.admin[index] = {...this.admin[index], ...updateAdministradorDto}
      return this.admin[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.admin.findIndex(admin => admin.id === id);
    if (index>0) {
      const admins = this.admin[index];
      this.admin.splice(index, 1);
      return admins
    }
    return null;
  }
}
