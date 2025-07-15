import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { AgendaService } from './agenda.service';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { Server } from 'socket.io';

@WebSocketGateway()
export class AgendaGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly agendaService: AgendaService) {}
  handleConnection(client: any, ...args: any[]) {

    const token =  client.handshake.headers.authentication as string;
    //validar Token
    console.log(`Token:${token}`);;
  }
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }

  @SubscribeMessage('createAgenda')
  async create(@MessageBody() createAgendaDto: CreateAgendaDto) {
    const insert = await this.agendaService.create(createAgendaDto)
    this.wss.emit("newAgenda", await this.findAll());
    return  insert;
  }

  @SubscribeMessage('findAllAgenda')
  findAll() {
    return this.agendaService.findAll();
  }

  @SubscribeMessage('findOneAgenda')
  findOne(@MessageBody() id: number) {
    return this.agendaService.findOne(id);
  }

  @SubscribeMessage('updateAgenda')
  async update(@MessageBody() updateAgendaDto: UpdateAgendaDto) {
    const cambioA = await this.agendaService.update(updateAgendaDto.id, updateAgendaDto)
    const allAgend = await this.agendaService.findAll()
    this.wss.emit('cambiosAgenda',{
      message: `Adgenda con ID ${updateAgendaDto.id} actualizado`, allAgend
    })
   return { message: `Administrador con ID ${updateAgendaDto.id} actualizado`, data: cambioA };
  }

  @SubscribeMessage('removeAgenda')
  async remove(@MessageBody() id: number) {
    const deletAg = await this.agendaService.remove(id);
    const allAgend = await this.agendaService.findAll();
    this.wss.emit('agendaList',{
      message: `Evento con ID ${id} eliminado`,allAgend
    });

    return { message: `Agenda con ID ${id} eliminado`, deletAg };
  }
}
