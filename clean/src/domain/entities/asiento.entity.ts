import { Entrada } from "./entrada.entity";
import { Funcion } from "./funcion.entity";

export class Asiento {
  constructor(
    public id_asiento: number,
    public numero: string,
    public estado: string,
    public funcion?: Funcion,
    public entrada?: Entrada | null
  ) {}

  public static fromObject(object: { [key: string]: any }): Asiento {
    const { id_asiento, numero, estado, funcion, entrada } = object;
    if (!id_asiento) throw 'Id is required';
    if (!numero) throw 'Numero is required';
    if (!estado) throw 'Estado is required';

    let func;
    if (funcion) {
      func = Funcion.fromObject(funcion);
    }

    let ent;
    if (entrada) {
      ent = Entrada.fromObject(entrada);
    }

    return new Asiento(id_asiento, numero, estado, func, ent);
  }
}