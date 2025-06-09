import { Funcion } from "./funcion.entity";

export class Cine {
  constructor(
    public id_cine: number,
    public nombre: string,
    public ubicacion: string,
    public funciones: Funcion[] = []
  ) {}

  public static fromObject(object: { [key: string]: any }): Cine {
    const { id_cine, nombre, ubicacion, funciones } = object;
    if (!id_cine) throw 'Id is required';
    if (!nombre) throw 'Nombre is required';
    if (!ubicacion) throw 'Ubicacion is required';

    const shows = funciones ? funciones.map((funcion: any) => Funcion.fromObject(funcion)) : [];

    return new Cine(
      id_cine,
      nombre,
      ubicacion,
      shows
    );
  }
}