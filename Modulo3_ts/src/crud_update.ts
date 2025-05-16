import { AppDataSource } from "./data-source";
import { TipoEleccion } from "./model/tipo_eleccion";
import { Partido } from "./model/partido";
import { Eleccion } from "./model/eleccion";
import { Candidato } from "./model/candidato";
import { UnidadesDeVotacion } from "./model/unidades_votos";

// Actualizar TipoEleccion
export const actualizarTipoEleccion = async (id: number, nuevoNombre: string) => {
    const tipo = await AppDataSource.manager.findOneBy(TipoEleccion, { id });
    if (!tipo) throw new Error("Tipo de elección no encontrado");

    tipo.nombre = nuevoNombre;
    return await AppDataSource.manager.save(tipo);
};

// Actualizar Partido
export const actualizarPartido = async (id: number, nuevoNombre: string) => {
    const partido = await AppDataSource.manager.findOneBy(Partido, { id });
    if (!partido) throw new Error("Partido no encontrado");

    partido.nombre = nuevoNombre;
    return await AppDataSource.manager.save(partido);
};

// Actualizar Elección
export const actualizarEleccion = async (
    id: number,
    nuevoNombre: string,
    nuevaFecha: Date,
    nuevoTipoId: number
) => {
    const eleccion = await AppDataSource.manager.findOneBy(Eleccion, { id });
    if (!eleccion) throw new Error("Elección no encontrada");

    const tipo = await AppDataSource.manager.findOneBy(TipoEleccion, { id: nuevoTipoId });
    if (!tipo) throw new Error("Tipo de elección no encontrado");

    eleccion.nombre = nuevoNombre;
    eleccion.fecha = nuevaFecha;
    eleccion.tipo = tipo;

    return await AppDataSource.manager.save(eleccion);
};

// Actualizar Candidato
export const actualizarCandidato = async (
    id: number,
    nuevoNombre: string,
    nuevaEleccionId: number,
    nuevoPartidoId: number
) => {
    const candidato = await AppDataSource.manager.findOneBy(Candidato, { id });
    if (!candidato) throw new Error("Candidato no encontrado");

    const eleccion = await AppDataSource.manager.findOneBy(Eleccion, { id: nuevaEleccionId });
    if (!eleccion) throw new Error("Elección no encontrada");

    const partido = await AppDataSource.manager.findOneBy(Partido, { id: nuevoPartidoId });
    if (!partido) throw new Error("Partido no encontrado");

    candidato.nombre = nuevoNombre;
    candidato.eleccion = eleccion;
    candidato.partido = partido;

    return await AppDataSource.manager.save(candidato);
};

// Actualizar Unidad de Votación
export const actualizarUnidadVotacion = async (
    id: number,
    nuevoNombre: string,
    nuevoReportaResultados: boolean
) => {
    const unidad = await AppDataSource.manager.findOneBy(UnidadesDeVotacion, { id });
    if (!unidad) throw new Error("Unidad de votación no encontrada");

    unidad.nombre = nuevoNombre;
    unidad.reporta_resultados = nuevoReportaResultados;

    return await AppDataSource.manager.save(unidad);
};
