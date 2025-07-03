import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AdministratorModule } from './administrator/administrator.module';
import { AgendaEventsModule } from './agenda-events/agenda-events.module';
import { ReportTypeModule } from './report-type/report-type.module';



@Module({
  imports: [AdministratorModule,AgendaEventsModule,ReportTypeModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AdministratorModule,
    AgendaEventsModule,
    ReportTypeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
