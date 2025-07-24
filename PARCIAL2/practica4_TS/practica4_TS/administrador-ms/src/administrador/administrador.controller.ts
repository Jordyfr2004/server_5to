import { Controller } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) {}

  @MessagePattern('createAdministrador')
  create(@Payload() CreateAdministradorDto: CreateAdministradorDto){
    return this.administradorService.create(CreateAdministradorDto);
  }

  @MessagePattern('findAllAdministradores')
  findAll() { return this.administradorService.findAll()}

  @MessagePattern('findOneAdministrador')
  findOne(@Payload() id: number){
    return this.administradorService.findOne(id)
  }

  @MessagePattern('updateAdministrador')
  update(@Payload() payload: { id: number; updateAdministradorDto: UpdateAdministradorDto}){
    return this.administradorService.update(payload.id, payload.updateAdministradorDto);
  }

  @MessagePattern('removeAdministrador')
  remove(@Payload() id: number) {
    return this.administradorService.remove(id);
  }

}
