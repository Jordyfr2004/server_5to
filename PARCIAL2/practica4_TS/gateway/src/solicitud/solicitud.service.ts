import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';

@Injectable()
export class SolicitudService {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
  ) {}

  create(createSolicitudDto: CreateSolicitudDto) {
    return this.natsClient.send({ cmd: 'crear-solicitud' }, createSolicitudDto);
  }

  findAll() {
    return this.natsClient.send({ cmd: 'obtener-solicitudes' }, {});
  }

  findOne(id: number) {
    return this.natsClient.send({ cmd: 'obtener-solicitud' }, id);
  }

  update(id: number, updateSolicitudDto: UpdateSolicitudDto) {
    return this.natsClient.send(
      { cmd: 'actualizar-solicitud' },
      { id, dto: updateSolicitudDto },
    );
  }

  remove(id: number) {
    return this.natsClient.send({ cmd: 'eliminar-solicitud' }, id);
  }
}
