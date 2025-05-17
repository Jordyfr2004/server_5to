import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ResultadosGenerales } from "../model/resultados_generales";
import { TipoEleccion } from "../model/tipo_eleccion";
import { TotalVotos } from "../model/total_votos";
import { Candidato } from "../model/candidato"; // Importación añadida

@Entity()
export class Eleccion {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => TipoEleccion, (tipo) => tipo.elecciones)
  tipo!: TipoEleccion;

  @Column({ length: 100, nullable: false })
  nombre!: string;

  @Column({ type: 'timestamp', nullable: false })
  fecha!: Date;

  @OneToMany(() => ResultadosGenerales, (resultado) => resultado.eleccion)
  resultados!: ResultadosGenerales[];

  @OneToMany(() => TotalVotos, (total) => total.eleccion)
  totales!: TotalVotos[];

  // Relación añadida con Candidato
  @OneToMany(() => Candidato, (candidato) => candidato.eleccion)
  candidatos!: Candidato[];
}