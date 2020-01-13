export class FinishedBook {
  public id: number;
  public name: string;
  public author: string;
  public startDate: string;
  public endDate: string;

  constructor(id: number, name: string, author: string, startDate: string, endDate: string) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
