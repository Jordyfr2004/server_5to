import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministradorModule } from './administrador/administrador.module';
import { AgendaEventosModule } from './agenda-eventos/agenda-eventos.module';
import { TipoReportesModule } from './tipo-reportes/tipo-reportes.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'sqlite',
      database:'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true,
    }),
    AdministradorModule,
    AgendaEventosModule,
    TipoReportesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
