import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartsApiService {

  info_url: string = 'https://api.whatsonchain.com/v1/bsv/main/chain/info';
  blockbyheight_url: string = 'https://api.whatsonchain.com/v1/bsv/<network>/block/height/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  data: any;

  block_height: any;

  counterArray: any;

  constructor(private http: HttpClient) { }

  getChainData() {
    this.data = this.http.get(this.info_url);
    console.log(this.data);
    return this.http.get(this.info_url);
  }

  getBlockHeightData(){

  }

  getTxnValueData(){

    this.data = this.http.get(this.info_url);
    this.block_height = this.data.blocks;

    for(let i=this.block_height;i=0;i--){
      // this.data = this.http.get(this.blockbyheight_url + this.block_height);
    }

  }

  getTxnVolumeData(){

  }

  getBlockSizeData(){

  }
 
  getTotalFeeData(){
    

  }

}
