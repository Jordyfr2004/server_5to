import { Funcion } from "./funcion.entity";

export class Pelicula {
  constructor(
    public id_pelicula: number,
    public titulo: string,
    public clasificacion: string,
    public formato: string,
    public idioma: string,
    public estado: string,
    public es_preestreno: boolean = false,
    public imagen_portada?: string | null,
    public funciones: Funcion[] = []
  ) {}

  public static fromObject(object: { [key: string]: any }): Pelicula {
    const { id_pelicula, titulo, clasificacion, formato, idioma, estado, es_preestreno, imagen_portada, funciones } = object;
    if (!id_pelicula) throw 'Id is required';
    if (!titulo) throw 'Titulo is required';
    if (!clasificacion) throw 'Clasificacion is required';
    if (!formato) throw 'Formato is required';
    if (!idioma) throw 'Idioma is required';
    if (!estado) throw 'Estado is required';

    const shows = funciones ? funciones.map((funcion: any) => Funcion.fromObject(funcion)) : [];

    return new Pelicula(
      id_pelicula,
      titulo,
      clasificacion,
      formato,
      idioma,
      estado,
      es_preestreno,
      imagen_portada,
      shows
    );
  }
}