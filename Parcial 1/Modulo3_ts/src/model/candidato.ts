import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Eleccion } from "../model/eleccion";
import { Partido } from "../model/partido";
import { Voto } from "../model/votos";

@Entity()
export class Candidato {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100, nullable: false })
  nombre!: string;

  @ManyToOne(() => Eleccion, (eleccion) => eleccion.candidatos)
  eleccion!: Eleccion;

  @ManyToOne(() => Partido, (partido) => partido.candidatos)
  partido!: Partido;

  @OneToMany(() => Voto, (voto) => voto.candidato)
  votos!: Voto[];
}