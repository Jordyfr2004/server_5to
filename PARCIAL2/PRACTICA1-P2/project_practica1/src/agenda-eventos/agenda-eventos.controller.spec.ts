import { Test, TestingModule } from '@nestjs/testing';
import { AgendaEventosController } from './agenda-eventos.controller';
import { AgendaEventosService } from './agenda-eventos.service';

describe('AgendaEventosController', () => {
  let controller: AgendaEventosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgendaEventosController],
      providers: [AgendaEventosService],
    }).compile();

    controller = module.get<AgendaEventosController>(AgendaEventosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
