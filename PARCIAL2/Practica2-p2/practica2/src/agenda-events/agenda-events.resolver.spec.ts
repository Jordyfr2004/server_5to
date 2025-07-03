import { Test, TestingModule } from '@nestjs/testing';
import { AgendaEventsResolver } from './agenda-events.resolver';
import { AgendaEventsService } from './agenda-events.service';

describe('AgendaEventsResolver', () => {
  let resolver: AgendaEventsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendaEventsResolver, AgendaEventsService],
    }).compile();

    resolver = module.get<AgendaEventsResolver>(AgendaEventsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
