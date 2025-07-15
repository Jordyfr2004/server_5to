import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministratorModule } from './administrator/administrator.module';
import { AgendaModule } from './agenda/agenda.module';
import { ReportTypesModule } from './report-types/report-types.module';

@Module({
  imports: [AdministratorModule, AgendaModule, ReportTypesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database:'app1.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AdministratorModule,
    AgendaModule,
    ReportTypesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

