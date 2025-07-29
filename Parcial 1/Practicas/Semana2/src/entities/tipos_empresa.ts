import {Column, Entity, PrimaryGeneratedColumn, BaseEntity, OneToMany} from 'typeorm';
import { empresaInfo } from './empresaInfo';

@Entity()
export class Tipoempresas extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    tipo_empresa: string;

    @OneToMany(() => empresaInfo, empresa => empresa.tipo)
    empresas: empresaInfo[];

}