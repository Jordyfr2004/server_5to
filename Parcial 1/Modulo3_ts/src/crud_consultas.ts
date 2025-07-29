import { AppDataSource } from "./data-source";
import { TipoEleccion } from "./model/tipo_eleccion";
import { Partido } from "./model/partido";
import { Eleccion } from "./model/eleccion";
import { Candidato } from "./model/candidato";
import { UnidadesDeVotacion } from "./model/unidades_votos";

export const consultarTiposEleccion = async () => {
    return await AppDataSource.manager.find(TipoEleccion);
}

export const consultarPartidos = async () => {
    return await AppDataSource.manager.find(Partido);
}

export const consultarElecciones = async () => {
    return await AppDataSource.manager.find(Eleccion, { relations: ["tipo"] });
}

export const consultarCandidatos = async () => {
    return await AppDataSource.manager.find(Candidato, { relations: ["eleccion", "partido"] });
}

export const consultarUnidadesDeVotacion = async () => {
    return await AppDataSource.manager.find(UnidadesDeVotacion);
}
