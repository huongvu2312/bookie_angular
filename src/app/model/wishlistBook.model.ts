export class WishlistBook {
  public id: number;
  public name: string;
  public author: string;

  constructor(id: number, name: string, author: string) {
    this.id = id;
    this.name = name;
    this.author = author;
  }
}
