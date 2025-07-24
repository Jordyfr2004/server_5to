import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DonantesService } from './donantes.service';
import { CreateDonanteDto } from './dto/create-donante.dto';
import { UpdateDonanteDto } from './dto/update-donante.dto';

@Controller()
export class DonantesController {
  constructor(private readonly donantesService: DonantesService) {}

  @MessagePattern('createDonante')
  create(@Payload() createDonanteDto: CreateDonanteDto) {
    return this.donantesService.create(createDonanteDto);
  }

  @MessagePattern('findAllDonantes')
  findAll() {
    return this.donantesService.findAll();
  }

  @MessagePattern('findOneDonante')
  findOne(@Payload() id: number) {
    return this.donantesService.findOne(id);
  }

  @MessagePattern('updateDonante')
  update(@Payload() payload: { id: number; updateDonanteDto: UpdateDonanteDto }) {
    return this.donantesService.update(payload.id, payload.updateDonanteDto);
  }

  @MessagePattern('removeDonante')
  remove(@Payload() id: number) {
    return this.donantesService.remove(id);
  }
}
