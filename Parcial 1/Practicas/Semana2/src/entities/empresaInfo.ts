import {Column, Entity, PrimaryGeneratedColumn, BaseEntity, OneToOne, ManyToOne,JoinColumn} from 'typeorm';
import { Donante } from './donante';
import { Tipoempresas } from './tipos_empresa';

@Entity()
export class empresaInfo extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    nombre_empresa: string

    @Column()
    ruc: string

    @Column()
    representante_legal : string

    @OneToOne(() => Donante, donante => donante.empresa)
    donante: Donante;

    @ManyToOne(() => Tipoempresas, tipo => tipo.empresas)
    @JoinColumn({ name: 'tipo_empresa_id' }) // FK en la base de datos
    tipo: Tipoempresas;
}