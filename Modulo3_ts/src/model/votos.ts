import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Candidato } from "../model/candidato";
import { TotalVotos } from "../model/total_votos";
import { UnidadesDeVotacion } from "../model/unidades_votos";

@Entity()
export class Voto {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Candidato, (candidato) => candidato.votos)
  candidato!: Candidato;

  @ManyToOne(() => UnidadesDeVotacion, (unidad) => unidad.votos)
  unidad_votacion!: UnidadesDeVotacion;

  @ManyToOne(() => TotalVotos, (total) => total.votos)
  total!: TotalVotos;

  @Column({ nullable: false })
  cantidad!: number;
}