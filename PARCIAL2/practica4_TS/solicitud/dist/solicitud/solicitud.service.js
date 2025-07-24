"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudService = void 0;
const common_1 = require("@nestjs/common");
let SolicitudService = class SolicitudService {
    solicitudes = [];
    idCounter = 1;
    create(dto) {
        const nueva = {
            id: this.idCounter++,
            ...dto,
        };
        this.solicitudes.push(nueva);
        return nueva;
    }
    findAll() {
        return this.solicitudes;
    }
    findOne(id) {
        return this.solicitudes.find((s) => s.id === id);
    }
    update(id, dto) {
        const solicitud = this.findOne(id);
        if (!solicitud)
            return undefined;
        Object.assign(solicitud, dto);
        return solicitud;
    }
    remove(id) {
        const idx = this.solicitudes.findIndex((s) => s.id === id);
        if (idx === -1)
            return false;
        this.solicitudes.splice(idx, 1);
        return true;
    }
};
exports.SolicitudService = SolicitudService;
exports.SolicitudService = SolicitudService = __decorate([
    (0, common_1.Injectable)()
], SolicitudService);
//# sourceMappingURL=solicitud.service.js.map