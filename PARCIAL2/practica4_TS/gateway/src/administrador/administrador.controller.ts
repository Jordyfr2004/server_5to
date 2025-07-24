import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';


@Controller('administrador')
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) {}

  @Post()
  create(@Body() dto: CreateAdministradorDto) {
    return this.administradorService.create(dto);
  }

  @Get()
  findAll() {
    return this.administradorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administradorService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateAdministradorDto,
  ){
    return this.administradorService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id:string){
    return this.administradorService.remove(+id);
  }

}
