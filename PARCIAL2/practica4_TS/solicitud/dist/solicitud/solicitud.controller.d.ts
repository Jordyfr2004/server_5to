import { SolicitudService } from './solicitud.service';
import { CreateSolicitudDto } from './create-solicitud.dto';
import { UpdateSolicitudDto } from './update-solicitud.dto';
export declare class SolicitudController {
    private readonly solicitudService;
    constructor(solicitudService: SolicitudService);
    create(dto: CreateSolicitudDto): import("./solicitud.entity").Solicitud;
    findAll(): import("./solicitud.entity").Solicitud[];
    findOne(id: number): import("./solicitud.entity").Solicitud | undefined;
    update(data: {
        id: number;
        dto: UpdateSolicitudDto;
    }): import("./solicitud.entity").Solicitud | undefined;
    remove(id: number): boolean;
}
