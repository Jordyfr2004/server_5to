export class CreatePeliculaDto {
  constructor(
    public readonly titulo: string,
    public readonly clasificacion: string,
    public readonly formato: string,
    public readonly idioma: string,
    public readonly estado: string,
    public readonly es_preestreno: boolean,
    public readonly imagen_portada?: string
  ) {}

  static create(object: { [key: string]: any }): [string?, CreatePeliculaDto?] {
    const { titulo, clasificacion, formato, idioma, estado, es_preestreno = false, imagen_portada } = object;

    if (!titulo) return ['Título es requerido'];
    if (!clasificacion) return ['Clasificación es requerida'];
    if (!formato) return ['Formato es requerido'];
    if (!idioma) return ['Idioma es requerido'];
    if (!estado) return ['Estado es requerido'];

    return [
      undefined,
      new CreatePeliculaDto(titulo, clasificacion, formato, idioma, estado, es_preestreno, imagen_portada)
    ];
  }
}

export class UpdatePeliculaDto {
  constructor(
    public readonly titulo?: string,
    public readonly clasificacion?: string,
    public readonly formato?: string,
    public readonly idioma?: string,
    public readonly estado?: string,
    public readonly es_preestreno?: boolean,
    public readonly imagen_portada?: string
  ) {}

  static create(object: { [key: string]: any }): [string?, UpdatePeliculaDto?] {
    const { titulo, clasificacion, formato, idioma, estado, es_preestreno, imagen_portada } = object;
    return [
      undefined,
      new UpdatePeliculaDto(titulo, clasificacion, formato, idioma, estado, es_preestreno, imagen_portada)
    ];
  }
}