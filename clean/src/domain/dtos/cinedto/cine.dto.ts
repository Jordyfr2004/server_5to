export class CreateCineDto {
  constructor(
    public readonly nombre: string,
    public readonly ubicacion: string
  ) {}

  static create(object: { [key: string]: any }): [string?, CreateCineDto?] {
    const { nombre, ubicacion } = object;

    if (!nombre) return ['Nombre es requerido'];
    if (!ubicacion) return ['Ubicación es requerida'];

    return [undefined, new CreateCineDto(nombre, ubicacion)];
  }
}

export class UpdateCineDto {
  constructor(
    public readonly nombre?: string,
    public readonly ubicacion?: string
  ) {}

  static create(object: { [key: string]: any }): [string?, UpdateCineDto?] {
    const { nombre, ubicacion } = object;
    return [undefined, new UpdateCineDto(nombre, ubicacion)];
  }
}