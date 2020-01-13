export class User {
  public id: number;
  public username: string;
  public pass: string;
  public email: string;

  constructor(id: number, username: string, pass: string, email: string) {
    this.id = id;
    this.username = username;
    this.pass = pass;
    this.email = email;
  }
}
