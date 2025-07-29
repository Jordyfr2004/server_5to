import { Entrada } from "./entrada.entity";

export class Usuario {
  constructor(
    public id_usuario: number,
    public nombre: string,
    public correo: string,
    public tipo_usuario: string,
    public es_estudiante: boolean = false,
    public entradas: Entrada[] = []
  ) {}

  public static fromObject(object: { [key: string]: any }): Usuario {
    const { id_usuario, nombre, correo, tipo_usuario, es_estudiante, entradas } = object;
    if (!id_usuario) throw 'Id is required';
    if (!nombre) throw 'Nombre is required';
    if (!correo) throw 'Correo is required';
    if (!tipo_usuario) throw 'Tipo_usuario is required';

    const tickets = entradas ? entradas.map((entrada: any) => Entrada.fromObject(entrada)) : [];

    return new Usuario(
      id_usuario,
      nombre,
      correo,
      tipo_usuario,
      es_estudiante,
      tickets
    );
  }
}
