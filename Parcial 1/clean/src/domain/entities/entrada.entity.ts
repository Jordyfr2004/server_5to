import { Asiento } from "./asiento.entity";
import { Funcion } from "./funcion.entity";
import { Usuario } from "./usuario.entity";

export class Entrada {
  constructor(
    public id_ticket: number,
    public tipo: string,
    public precio: number,
    public cantidad: number,
    public requiere_id: boolean = false,
    public funcion?: Funcion,
    public usuario?: Usuario,
    public asientos: Asiento[] = []
  ) {}

  public static fromObject(object: { [key: string]: any }): Entrada {
    const { id_ticket, tipo, precio, cantidad, requiere_id, funcion, usuario, asientos } = object;
    if (!id_ticket) throw 'Id is required';
    if (!tipo) throw 'Tipo is required';
    if (!precio) throw 'Precio is required';
    if (!cantidad) throw 'Cantidad is required';

    let func;
    if (funcion) {
      func = Funcion.fromObject(funcion);
    }

    let user;
    if (usuario) {
      user = Usuario.fromObject(usuario);
    }

    const seats = asientos ? asientos.map((asiento: any) => Asiento.fromObject(asiento)) : [];

    return new Entrada(
      id_ticket,
      tipo,
      precio,
      cantidad,
      requiere_id,
      func,
      user,
      seats
    );
  }
}