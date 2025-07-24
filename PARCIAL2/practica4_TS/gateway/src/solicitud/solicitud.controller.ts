import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { SolicitudService } from './solicitud.service';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';

@Controller('solicitud')
export class SolicitudController {
  constructor(private readonly solicitudService: SolicitudService) {}

  @Post()
  create(@Body() createSolicitudDto: CreateSolicitudDto) {
    return this.solicitudService.create(createSolicitudDto);
  }

  @Get()
  findAll() {
    return this.solicitudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.solicitudService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSolicitudDto: UpdateSolicitudDto,
  ) {
    return this.solicitudService.update(id, updateSolicitudDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.solicitudService.remove(id);
  }
}
