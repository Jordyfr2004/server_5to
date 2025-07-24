import { Injectable } from '@nestjs/common';
import { Solicitud } from './solicitud.entity';
import { CreateSolicitudDto } from './create-solicitud.dto';
import { UpdateSolicitudDto } from './update-solicitud.dto';

@Injectable()
export class SolicitudService {
  private solicitudes: Solicitud[] = [];
  private idCounter = 1;

  create(dto: CreateSolicitudDto): Solicitud {
    const nueva: Solicitud = {
      id: this.idCounter++,
      ...dto,
    };
    this.solicitudes.push(nueva);
    return nueva;
  }

  findAll(): Solicitud[] {
    return this.solicitudes;
  }

  findOne(id: number): Solicitud | undefined {
    return this.solicitudes.find((s) => s.id === id);
  }

  update(id: number, dto: UpdateSolicitudDto): Solicitud | undefined {
    const solicitud = this.findOne(id);
    if (!solicitud) return undefined;
    Object.assign(solicitud, dto);
    return solicitud;
  }

  remove(id: number): boolean {
    const idx = this.solicitudes.findIndex((s) => s.id === id);
    if (idx === -1) return false;
    this.solicitudes.splice(idx, 1);
    return true;
  }
}
