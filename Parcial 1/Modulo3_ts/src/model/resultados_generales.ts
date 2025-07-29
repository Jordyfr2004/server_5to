import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Eleccion } from "../model/eleccion";
import { TotalVotos } from "../model/total_votos";

@Entity()
export class ResultadosGenerales {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Eleccion, (eleccion) => eleccion.resultados)
  eleccion!: Eleccion;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
  fecha_generacion!: Date;

  @OneToMany(() => TotalVotos, (total) => total.resultado_general)
  totales_votos!: TotalVotos[];
}