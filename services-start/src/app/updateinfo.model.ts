export class updateInfo {
  public id: number;
  public newStatus: string;
  constructor(id: number, newStatus: string) {
    this.id = id;
    this.newStatus = newStatus;
  }
}
