import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Voto } from "../model/votos";

@Entity()
export class UnidadesDeVotacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100, nullable: false })
  nombre!: string;

  @Column({ default: false })
  reporta_resultados!: boolean;

  @OneToMany(() => Voto, (voto) => voto.unidad_votacion)
  votos!: Voto[];
}