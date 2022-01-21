import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartsApiService {

  info_url: string = 'https://api.whatsonchain.com/v1/bsv/main/chain/info';
  blockbyheight_url: string = 'https://api.whatsonchain.com/v1/bsv/main/block/height/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  data: any;
  data1: any;
  data2: any;
  data3: any;
  data4: any;
  data5: any;

  block_height: any;
  block_value: any;
  txn_value: any;

  counterArray: any;

  constructor(private http: HttpClient) { }

  getChainData() {
    this.data = this.http.get(this.info_url);
    console.log(this.data);
    return this.http.get(this.info_url);
  }

  getBlockData(num: Number){

    let url = this.blockbyheight_url + num;

    this.data1 = this.http.get(url);
    console.log(this.data1);
    return this.http.get(url);

  }

}