import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartsApiService {

  url: string = 'https://api.whatsonchain.com/v1/bsv/main/chain/info';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  data: any;

  constructor(private http: HttpClient) { }

  getChainData() {
    this.data = this.http.get(this.url);
    console.log(this.data);
    // return this.http.get(this.url);
  }

}
