import { AppDataSource } from "./data-source";
import { Candidato } from "../src/model/candidato";
import { TipoEleccion } from "./model/tipo_eleccion";
import { Partido } from "./model/partido";
import { Eleccion } from "./model/eleccion";
import { UnidadesDeVotacion } from "./model/unidades_votos";

export const insertarTipoEleccion =async(nombre: string)=>{
    const tipo = new TipoEleccion();
    tipo.nombre = nombre;
    return await AppDataSource.manager.save(tipo);
}

export const insertarPartido = async(nombre:string) => {
    const partido = new Partido();
    partido.nombre = nombre;
    return await AppDataSource.manager.save(partido);
}

export const insertarEleccion = async(nombre:string,fecha:Date, tipoEleccionId:number) => {
    const tipo = await AppDataSource.manager.findOneBy(TipoEleccion,{id: tipoEleccionId});
    if (!tipo) {
        throw new Error("Tipo de eleccion no encontrado");
    }
    const eleccion = new Eleccion();
    eleccion.nombre = nombre;
    eleccion.fecha = fecha;
    eleccion.tipo = tipo;

    return await AppDataSource.manager.save(eleccion)
}

export const  insertarCandidato = async (nombre: string, eleccionId: number, partidoId: number) =>{
    const eleccion = await AppDataSource.manager.findOneBy(Eleccion,{id: eleccionId});
        if(!eleccion){
            throw new Error( "Eleccion no encontrada");
        }
    
        const partido = await AppDataSource.manager.findOneBy(Partido,{id: partidoId});
        if (!partido){
            throw new Error("Partido no encontrado");
        }

    const candidato = new Candidato();
    candidato.nombre = nombre;
    candidato.eleccion = eleccion;
    candidato.partido = partido

    return await AppDataSource.manager.save(candidato);
}

export const insertarUnidadVotacion = async (nombre: string,reporta_resultados: boolean = false) =>{
    const unidad = new UnidadesDeVotacion();
    unidad.nombre = nombre;
    unidad.reporta_resultados = reporta_resultados;

    return await AppDataSource.manager.save(unidad);
}