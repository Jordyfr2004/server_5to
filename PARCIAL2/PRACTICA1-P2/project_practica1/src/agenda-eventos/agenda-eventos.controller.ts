import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgendaEventosService } from './agenda-eventos.service';
import { CreateAgendaEventoDto } from './dto/create-agenda-evento.dto';
import { UpdateAgendaEventoDto } from './dto/update-agenda-evento.dto';

@Controller('agenda-eventos')
export class AgendaEventosController {
  constructor(private readonly agendaEventosService: AgendaEventosService) {}

  @Post()
  create(@Body() createAgendaEventoDto: CreateAgendaEventoDto) {
    return this.agendaEventosService.create(createAgendaEventoDto);
  }

  @Get()
  findAll() {
    return this.agendaEventosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agendaEventosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgendaEventoDto: UpdateAgendaEventoDto) {
    return this.agendaEventosService.update(+id, updateAgendaEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agendaEventosService.remove(+id);
  }
}
