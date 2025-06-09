export class CreateAsientoDto {
  constructor(
    public readonly numero: string,
    public readonly estado: string,
    public readonly funcionId: number,
    public readonly entradaId?: number | null
  ) {}

  static create(object: { [key: string]: any }): [string?, CreateAsientoDto?] {
    const { numero, estado, funcionId, entradaId } = object;

    if (!numero) return ['Número es requerido'];
    if (!estado) return ['Estado es requerido'];
    if (!funcionId) return ['ID de función es requerido'];

    return [undefined, new CreateAsientoDto(numero, estado, funcionId, entradaId)];
  }
}

export class UpdateAsientoDto {
  constructor(
    public readonly numero?: string,
    public readonly estado?: string,
    public readonly funcionId?: number,
    public readonly entradaId?: number | null
  ) {}

  static create(object: { [key: string]: any }): [string?, UpdateAsientoDto?] {
    const { numero, estado, funcionId, entradaId } = object;
    return [undefined, new UpdateAsientoDto(numero, estado, funcionId, entradaId)];
  }
}