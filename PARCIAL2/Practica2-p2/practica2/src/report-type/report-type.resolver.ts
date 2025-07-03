import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReportTypeService } from './report-type.service';
import { ReportType } from './entities/report-type.entity';
import { CreateReportTypeInput } from './dto/create-report-type.input';
import { UpdateReportTypeInput } from './dto/update-report-type.input';

@Resolver(() => ReportType)
export class ReportTypeResolver {
  constructor(private readonly reportTypeService: ReportTypeService) {}

  @Mutation(() => ReportType)
  createReportType(@Args('createReportTypeInput') createReportTypeInput: CreateReportTypeInput) :Promise<ReportType> {
    return this.reportTypeService.create(createReportTypeInput);
  }

  @Query(() => [ReportType], { name: 'reportTypes' })
  findAll() :Promise<ReportType[]> {
    return this.reportTypeService.findAll();
  }

  @Query(() => ReportType, { name: 'reportType' })
  findOne(@Args('id', { type: () =>String }) id: string):Promise<ReportType> {
    return this.reportTypeService.findOne(id);
  }

  @Mutation(() => ReportType)
  updateReportType(@Args('updateReportTypeInput') updateReportTypeInput: UpdateReportTypeInput):Promise<ReportType> {
    return this.reportTypeService.update(updateReportTypeInput.id, updateReportTypeInput);
  }

  @Mutation(() => ReportType)
  removeReportType(@Args('id', { type: () => String }) id: string): Promise<ReportType> {
    return this.reportTypeService.remove(id);
  }
}
