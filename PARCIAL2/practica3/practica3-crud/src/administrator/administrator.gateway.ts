import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer} from '@nestjs/websockets';
import { AdministratorService } from './administrator.service';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { Server } from 'socket.io';

@WebSocketGateway({cors: true})
export class AdministratorGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly administratorService: AdministratorService) {}
  handleConnection(client: any, ...args: any[]) {

    const token =  client.handshake.headers.authentication as string;
    //validar Token
    console.log(`Token:${token}`);



  }
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }

  @SubscribeMessage('createAdministrator')
  async create(@MessageBody() createAdministratorDto: CreateAdministratorDto) {
    const inserted = await this.administratorService.create(createAdministratorDto);
    this.wss.emit('newAdministrator',await this.findAll());
    return inserted
  }

  @SubscribeMessage('findAllAdministrator')
  findAll() {
    return this.administratorService.findAll();
  }

  @SubscribeMessage('findOneAdministrator')
  findOne(@MessageBody() id: number) {
    return this.administratorService.findOne(id);
  }

  @SubscribeMessage('updateAdministrator')
  async update(@MessageBody() updateAdministratorDto: UpdateAdministratorDto) {
    const cambio = await this.administratorService.update(updateAdministratorDto.id, updateAdministratorDto);
    const allAdmins = await this.administratorService.findAll();
    this.wss.emit('cambios',{
       message: `Administrador con ID ${updateAdministratorDto.id} actualizado`,allAdmins
    } );
    return { message: `Administrador con ID ${updateAdministratorDto.id} actualizado`, data: cambio };
  }


  @SubscribeMessage('removeAdministrator')
  async remove(@MessageBody() id: number) {
    const delet = await this.administratorService.remove(id);
    const allAdmins = await this.administratorService.findAll();

    this.wss.emit('newList', {
      message: `Administrador con ID ${id} eliminado`, data:
      allAdmins
    });

    return { message: `Administrador con ID ${id} eliminado`, delet };
  }
}
