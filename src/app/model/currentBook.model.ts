export class CurrentBook {
  public id: number;
  public name: string;
  public author: string;
  public startDate: string;

  constructor(id: number, name: string, author: string, startDate: string) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.startDate = startDate;
  }
}
