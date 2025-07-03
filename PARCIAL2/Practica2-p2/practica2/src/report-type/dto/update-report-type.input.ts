import { CreateReportTypeInput } from './create-report-type.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateReportTypeInput extends PartialType(CreateReportTypeInput) {
  @Field(() => ID)
  id: string;
}
