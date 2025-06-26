import { Test, TestingModule } from '@nestjs/testing';
import { AgendaEventosService } from './agenda-eventos.service';

describe('AgendaEventosService', () => {
  let service: AgendaEventosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendaEventosService],
    }).compile();

    service = module.get<AgendaEventosService>(AgendaEventosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
