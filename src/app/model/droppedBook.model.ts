export class DroppedBook {
  public id: number;
  public name: string;
  public author: string;
  public startDate: string;
  public stopDate: string;

  constructor(id: number, name: string, author: string, startDate: string, stopDate: string) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.startDate = startDate;
    this.stopDate = stopDate;
  }
}
