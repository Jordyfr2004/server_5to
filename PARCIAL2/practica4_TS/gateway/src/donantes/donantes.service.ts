import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateDonanteDto } from './dto/create-donante.dto';
import { UpdateDonanteDto } from './dto/update-donante.dto';

@Injectable()
export class DonantesService {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
  ) {}

  create(createDonanteDto: CreateDonanteDto) {
    return this.natsClient.send('createDonante', createDonanteDto);
  }

  findAll() {
    return this.natsClient.send('findAllDonantes', {});
  }

  findOne(id: number) {
    return this.natsClient.send('findOneDonante', id);
  }

  update(id: number, updateDonanteDto: UpdateDonanteDto) {
    return this.natsClient.send('updateDonante', { id, updateDonanteDto });
  }

  remove(id: number) {
    return this.natsClient.send('removeDonante', id);
  }
}
