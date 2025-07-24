import { Inject, Injectable } from '@nestjs/common';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AdministradorService {
  constructor (
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,

  ){}

  create(createAdministradorDto: CreateAdministradorDto) {
    return this.natsClient.send('createAdministrador', createAdministradorDto)
  }

  findAll() {
    return this.natsClient.send('findAllAdministradores', {});
  }

  findOne(id: number) {
    return this.natsClient.send('findOneAdministrador',id);
  }

  update(id: number, updateAdministradorDto: UpdateAdministradorDto) {
    return this.natsClient.send('updateAdministrador', {id, updateAdministradorDto});
  }

  remove(id: number) {
    return this.natsClient.send('removeAdministrador', id)
  }
}
