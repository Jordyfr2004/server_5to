import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Eleccion } from "../model/eleccion";
import { ResultadosGenerales } from "../model/resultados_generales";
import { Voto } from "../model/votos";

@Entity()
export class TotalVotos {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Eleccion, (eleccion) => eleccion.totales)
  eleccion!: Eleccion;

  @ManyToOne(() => ResultadosGenerales, (resultado) => resultado.totales_votos)
  resultado_general!: ResultadosGenerales;

  @OneToMany(() => Voto, (voto) => voto.total)
  votos!: Voto[];
}