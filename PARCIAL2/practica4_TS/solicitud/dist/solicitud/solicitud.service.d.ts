import { Solicitud } from './solicitud.entity';
import { CreateSolicitudDto } from './create-solicitud.dto';
import { UpdateSolicitudDto } from './update-solicitud.dto';
export declare class SolicitudService {
    private solicitudes;
    private idCounter;
    create(dto: CreateSolicitudDto): Solicitud;
    findAll(): Solicitud[];
    findOne(id: number): Solicitud | undefined;
    update(id: number, dto: UpdateSolicitudDto): Solicitud | undefined;
    remove(id: number): boolean;
}
