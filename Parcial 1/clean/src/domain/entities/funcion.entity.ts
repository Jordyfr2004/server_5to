import { Asiento } from "./asiento.entity";
import { Cine } from "./cine.entity";
import { Entrada } from "./entrada.entity";
import { Pelicula } from "./pelicula.entity";

export class Funcion {
  constructor(
    public id_funcion: number,
    public fecha: string,
    public hora: string,
    public sala: string,
    public formato: string,
    public idioma: string,
    public disponibilidad: string,
    public pelicula?: Pelicula,
    public cine?: Cine,
    public asientos: Asiento[] = [],
    public entradas: Entrada[] = []
  ) {}

  public static fromObject(object: { [key: string]: any }): Funcion {
    const { id_funcion, fecha, hora, sala, formato, idioma, disponibilidad, pelicula, cine, asientos, entradas } = object;
    if (!id_funcion) throw 'Id is required';
    if (!fecha) throw 'Fecha is required';
    if (!hora) throw 'Hora is required';
    if (!sala) throw 'Sala is required';
    if (!formato) throw 'Formato is required';
    if (!idioma) throw 'Idioma is required';
    if (!disponibilidad) throw 'Disponibilidad is required';

    let movie;
    if (pelicula) {
      movie = Pelicula.fromObject(pelicula);
    }

    let cinema;
    if (cine) {
      cinema = Cine.fromObject(cine);
    }

    const seats = asientos ? asientos.map((asiento: any) => Asiento.fromObject(asiento)) : [];
    const tickets = entradas ? entradas.map((entrada: any) => Entrada.fromObject(entrada)) : [];

    return new Funcion(
      id_funcion,
      fecha,
      hora,
      sala,
      formato,
      idioma,
      disponibilidad,
      movie,
      cinema,
      seats,
      tickets
    );
  }
}