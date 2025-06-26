import { Test, TestingModule } from '@nestjs/testing';
import { TipoReportesService } from './tipo-reportes.service';

describe('TipoReportesService', () => {
  let service: TipoReportesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoReportesService],
    }).compile();

    service = module.get<TipoReportesService>(TipoReportesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
