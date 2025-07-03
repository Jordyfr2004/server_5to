import { IsUUID } from 'class-validator';
import { CreateAgendaEventInput } from './create-agenda-event.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateAgendaEventInput extends PartialType(CreateAgendaEventInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
