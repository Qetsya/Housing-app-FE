export class House {
  constructor(
    public id: number,
    public type: string,
    public address: string,
    public city: string,
    public sqFootage: number,
    public rooms: number,
    public builtYear: number,
    public rent: boolean,
    private ownerId: number
  ) {}
}
