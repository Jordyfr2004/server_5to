import"reflect-metadata";
import { DataSource } from "typeorm";
import { Candidato } from "../src/model/candidato";
import { Eleccion } from "./model/eleccion";
import { Partido } from "./model/partido";
import { ResultadosGenerales } from "./model/resultados_generales";
import { TipoEleccion } from "./model/tipo_eleccion";
import { TotalVotos } from "./model/total_votos";
import { UnidadesDeVotacion } from "./model/unidades_votos";
import { Voto } from "./model/votos";
import * as dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
    type:"postgres",
    database:process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USERNAME,
     password: process.env.DB_PASSWORD,
    synchronize: true,
    logging: true,
    entities: [Candidato,Eleccion,Partido,ResultadosGenerales,TipoEleccion,TotalVotos,UnidadesDeVotacion,Voto],
    migrations: [],
    subscribers:[],
})