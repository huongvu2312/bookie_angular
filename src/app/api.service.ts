import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private SERVER_URL = 'http://localhost:3000/books';

  constructor(private httpClient: HttpClient) { }

  public get() {
    return this.httpClient.get(this.SERVER_URL);
  }

  public post(element) {
    return this.httpClient.post(this.SERVER_URL, element);
  }

  public delete(index) {
    return this.httpClient.delete(this.SERVER_URL + '/' + index);
  }

}
