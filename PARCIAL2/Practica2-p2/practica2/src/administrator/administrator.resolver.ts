import { Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import { AdministratorService } from './administrator.service';
import { Administrator } from './entities/administrator.entity';
import { CreateAdministratorInput } from './dto/create-administrator.input';
import { UpdateAdministratorInput } from './dto/update-administrator.input';

@Resolver(() => Administrator)
export class AdministratorResolver {
  constructor(private readonly administratorService: AdministratorService) {}

  @Mutation(() => Administrator)
  createAdministrator(@Args('createAdministratorInput') createAdministratorInput: CreateAdministratorInput):Promise<Administrator> {
    return this.administratorService.create(createAdministratorInput);
  }

  @Query(() => [Administrator], { name: 'administrators' })
  findAll(): Promise<Administrator[]> {
    return this.administratorService.findAll();
  }

  @Query(() => Administrator, { name: 'administrator' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Administrator> {
    return this.administratorService.findOne(id);
  }

  @Mutation(() => Administrator)
  updateAdministrator(@Args('updateAdministratorInput') updateAdministratorInput: UpdateAdministratorInput):Promise<Administrator> {
    return this.administratorService.update(updateAdministratorInput.id, updateAdministratorInput);
  }

  @Mutation(() => Administrator)
  removeAdministrator(@Args('id', { type: () => String }) id: string):Promise<Administrator> {
    return this.administratorService.remove(id);
  }
}
