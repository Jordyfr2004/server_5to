import {Column, Entity, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToOne,OneToMany, JoinColumn} from 'typeorm';
import { empresaInfo } from './empresaInfo';
import { Ubicacion } from './ubicacion';

@Entity()
export class Donante extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre : string

    @Column()
    apellido : string

    @Column()
    tipo_donante :string

    @Column()
    telefono :string

    @Column()
    correo :string

    @Column()
    password :string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date

    @OneToOne(() =>empresaInfo, empresa => empresa.donante, { cascade: true, nullable:true})
    @JoinColumn()
    empresa?: empresaInfo;

    @OneToMany(() => Ubicacion, ubicacion => ubicacion.donante, { cascade: true })
    ubicaciones: Ubicacion[];
}