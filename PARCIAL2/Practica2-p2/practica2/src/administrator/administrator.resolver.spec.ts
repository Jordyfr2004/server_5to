import { Test, TestingModule } from '@nestjs/testing';
import { AdministratorResolver } from './administrator.resolver';
import { AdministratorService } from './administrator.service';

describe('AdministratorResolver', () => {
  let resolver: AdministratorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdministratorResolver, AdministratorService],
    }).compile();

    resolver = module.get<AdministratorResolver>(AdministratorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
