import { PartialType } from '@nestjs/mapped-types';
import { CreateAgendaEventoDto } from './create-agenda-evento.dto';

export class UpdateAgendaEventoDto extends PartialType(CreateAgendaEventoDto) {}
