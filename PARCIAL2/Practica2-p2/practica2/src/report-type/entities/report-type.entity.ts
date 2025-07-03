import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({name:'report-type'})
export class ReportType {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Field(()=> String)
  tipo:string;

  @Column()
  @Field(() => String)
  reporte: string;

  @CreateDateColumn()
  @Field(()=>Date)
  createAt: Date;

  @UpdateDateColumn()
  @Field(()=>Date)
  updateAt: Date;
}
