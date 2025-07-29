import {Column, Entity, PrimaryGeneratedColumn, BaseEntity,ManyToOne} from 'typeorm';
import { Donante } from './donante';
@Entity()
export class Ubicacion extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    direccion: string;

    @Column()
    ciudad: string;

    @Column()
    provincia: string;

    @ManyToOne(() => Donante, donante => donante.ubicaciones, { onDelete: 'CASCADE' })
    donante: Donante;
}