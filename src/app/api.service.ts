import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private SERVER_URL = 'http://localhost:5000/';

  constructor(private httpClient: HttpClient) { }

  public get(database) {
    return this.httpClient.get(this.SERVER_URL + database);
  }

  public post(database, element) {
    return this.httpClient.post(this.SERVER_URL + database, element);
  }

  public delete(database, index) {
    return this.httpClient.delete(this.SERVER_URL + database + '/' + index);
  }

  public put(database, element) {
    return this.httpClient.put(this.SERVER_URL + database + '/' + element.id, element);
  }

}
