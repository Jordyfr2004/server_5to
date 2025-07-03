import { Test, TestingModule } from '@nestjs/testing';
import { AgendaEventsService } from './agenda-events.service';

describe('AgendaEventsService', () => {
  let service: AgendaEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendaEventsService],
    }).compile();

    service = module.get<AgendaEventsService>(AgendaEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
