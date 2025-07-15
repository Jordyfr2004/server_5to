import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { ReportTypesService } from './report-types.service';
import { CreateReportTypeDto } from './dto/create-report-type.dto';
import { UpdateReportTypeDto } from './dto/update-report-type.dto';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ReportTypesGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly reportTypesService: ReportTypesService) {}
  handleConnection(client: any, ...args: any[]) {
    const token =  client.handshake.headers.authentication as string;
    //validar Token
    console.log(`Token:${token}`);;
  }
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }

  @SubscribeMessage('createReportType')
  async create(@MessageBody() createReportTypeDto: CreateReportTypeDto) {
    const insertt = await this.reportTypesService.create(createReportTypeDto)
    this.wss.emit("newReporte", await this.findAll())
    return insertt;
  }

  @SubscribeMessage('findAllReportTypes')
  findAll() {
    return this.reportTypesService.findAll();
  }

  @SubscribeMessage('findOneReportType')
  findOne(@MessageBody() id: number) {
    return this.reportTypesService.findOne(id);
  }

  @SubscribeMessage('updateReportType')
  async update(@MessageBody() updateReportTypeDto: UpdateReportTypeDto) {
    const cambioR = await this.reportTypesService.update(updateReportTypeDto.id, updateReportTypeDto)
    const allReport = await this.reportTypesService.findAll()
    this.wss.emit('cambiosReportes',{
      message: `Adgenda con ID ${updateReportTypeDto.id} actualizado`, allReport
    })
    return { message: `Administrador con ID ${updateReportTypeDto.id} actualizado`, data: cambioR }
  }

  @SubscribeMessage('removeReportType')
  async remove(@MessageBody() id: number) {
    const deleteR = await this.reportTypesService.remove(id);
    const allReport= await this.reportTypesService.findAll()
    this.wss.emit('reporteList',{
      message: `Reporte con ID ${id} eliminado`,allReport
    })
    return { message: `Reporte con ID ${id} eliminado`, deleteR }
  }
}
