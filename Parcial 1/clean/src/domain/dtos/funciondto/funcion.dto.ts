export class CreateFuncionDto {
  constructor(
    public readonly fecha: string,
    public readonly hora: string,
    public readonly sala: string,
    public readonly formato: string,
    public readonly idioma: string,
    public readonly peliculaId: number,
    public readonly cineId: number
  ) {}

  static create(object: { [key: string]: any }): [string?, CreateFuncionDto?] {
    const { fecha, hora, sala, formato, idioma, peliculaId, cineId } = object;

    if (!fecha) return ['Fecha es requerida'];
    if (!hora) return ['Hora es requerida'];
    if (!sala) return ['Sala es requerida'];
    if (!formato) return ['Formato es requerido'];
    if (!idioma) return ['Idioma es requerido'];
    if (!peliculaId) return ['ID de película es requerido'];
    if (!cineId) return ['ID de cine es requerido'];

    return [
      undefined,
      new CreateFuncionDto(fecha, hora, sala, formato, idioma, peliculaId, cineId)
    ];
  }
}

export class UpdateFuncionDto {
  constructor(
    public readonly fecha?: string,
    public readonly hora?: string,
    public readonly sala?: string,
    public readonly formato?: string,
    public readonly idioma?: string,
    public readonly disponibilidad?: string,
    public readonly peliculaId?: number,
    public readonly cineId?: number
  ) {}

  static create(object: { [key: string]: any }): [string?, UpdateFuncionDto?] {
    const { fecha, hora, sala, formato, idioma, disponibilidad, peliculaId, cineId } = object;
    return [
      undefined,
      new UpdateFuncionDto(fecha, hora, sala, formato, idioma, disponibilidad, peliculaId, cineId)
    ];
  }
}