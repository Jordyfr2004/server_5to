import { Test, TestingModule } from '@nestjs/testing';
import { TipoReportesController } from './tipo-reportes.controller';
import { TipoReportesService } from './tipo-reportes.service';

describe('TipoReportesController', () => {
  let controller: TipoReportesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoReportesController],
      providers: [TipoReportesService],
    }).compile();

    controller = module.get<TipoReportesController>(TipoReportesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
