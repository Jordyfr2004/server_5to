import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SolicitudService } from './solicitud.service';
import { CreateSolicitudDto } from './create-solicitud.dto';
import { UpdateSolicitudDto } from './update-solicitud.dto';

@Controller()
export class SolicitudController {
  constructor(private readonly solicitudService: SolicitudService) {}

  @MessagePattern({ cmd: 'crear-solicitud' })
  create(@Payload() dto: CreateSolicitudDto) {
    return this.solicitudService.create(dto);
  }

  @MessagePattern({ cmd: 'obtener-solicitudes' })
  findAll() {
    return this.solicitudService.findAll();
  }

  @MessagePattern({ cmd: 'obtener-solicitud' })
  findOne(@Payload() id: number) {
    return this.solicitudService.findOne(id);
  }

  @MessagePattern({ cmd: 'actualizar-solicitud' })
  update(@Payload() data: { id: number; dto: UpdateSolicitudDto }) {
    return this.solicitudService.update(data.id, data.dto);
  }

  @MessagePattern({ cmd: 'eliminar-solicitud' })
  remove(@Payload() id: number) {
    return this.solicitudService.remove(id);
  }
}
