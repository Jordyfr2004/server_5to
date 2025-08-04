import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DoctorService } from './doctor.service';
import { Doctor } from './entities/doctor.entity';
import { CreateDoctorInput } from './dto/create-doctor.input';
import { UpdateDoctorInput } from './dto/update-doctor.input';

@Resolver(() => Doctor)
export class DoctorResolver {
  constructor(private readonly doctorService: DoctorService) {}

  @Mutation(() => Doctor)
  createDoctor(@Args('createDoctorInput') createDoctorInput: CreateDoctorInput): Promise<Doctor> {
    return this.doctorService.create(createDoctorInput);
  }

  @Query(() => [Doctor], { name: 'doctor' })
  findAll(): Promise<Doctor[]> {
    return this.doctorService.findAll();
  }

  @Query(() => Doctor, { name: 'doctor' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Doctor> {
    return this.doctorService.findOne(id);
  }

  @Mutation(() => Doctor)
  updateDoctor(@Args('updateDoctorInput') updateDoctorInput: UpdateDoctorInput): Promise<Doctor> {
    return this.doctorService.update(updateDoctorInput.id, updateDoctorInput);
  }

  @Mutation(() => Doctor)
  removeDoctor(@Args('id', { type: () => String }) id: string): Promise<Doctor> {
    return this.doctorService.remove(id);
  }
}
