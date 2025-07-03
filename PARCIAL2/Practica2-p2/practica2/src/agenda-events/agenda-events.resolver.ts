import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AgendaEventsService } from './agenda-events.service';
import { AgendaEvent } from './entities/agenda-event.entity';
import { CreateAgendaEventInput } from './dto/create-agenda-event.input';
import { UpdateAgendaEventInput } from './dto/update-agenda-event.input';

@Resolver(() => AgendaEvent)
export class AgendaEventsResolver {
  constructor(private readonly agendaEventsService: AgendaEventsService) {}

  @Mutation(() => AgendaEvent)
  createAgendaEvent(@Args('createAgendaEventInput') createAgendaEventInput: CreateAgendaEventInput) :Promise<AgendaEvent> {
    return this.agendaEventsService.create(createAgendaEventInput);
  }

  @Query(() => [AgendaEvent], { name: 'agendaEvents' })
  findAll() :Promise<AgendaEvent[]> {
    return this.agendaEventsService.findAll();
  }

  @Query(() => AgendaEvent, { name: 'agendaEvent' })
  findOne(@Args('id', { type: () => String }) id: string):Promise<AgendaEvent> {
    return this.agendaEventsService.findOne(id);
  }

  @Mutation(() => AgendaEvent)
  updateAgendaEvent(@Args('updateAgendaEventInput') updateAgendaEventInput: UpdateAgendaEventInput):Promise<AgendaEvent> {
    return this.agendaEventsService.update(updateAgendaEventInput.id, updateAgendaEventInput);
  }

  @Mutation(() => AgendaEvent)
  removeAgendaEvent(@Args('id', { type: () => String }) id: string):Promise<AgendaEvent> {
    return this.agendaEventsService.remove(id);
  }
}
