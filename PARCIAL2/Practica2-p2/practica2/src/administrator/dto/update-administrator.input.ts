import { IsUUID } from 'class-validator';
import { CreateAdministratorInput } from './create-administrator.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateAdministratorInput extends PartialType(CreateAdministratorInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
