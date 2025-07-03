import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateReportTypeInput {
  
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  tipo:string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  reporte: string;
}
