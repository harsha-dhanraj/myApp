//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {Http,Headers} from '@angular/http';
/*
  Generated class for the DeviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeviceProvider {

  constructor(public http: Http) {}
  
  findAllGateway(){
  //let headers=new Headers ();
  //headers.append('content-Type','application/json');
  let ep='http://localhost:8080/gateways/all';
  return this.http.get(ep).map(res =>res.json());
  }

  addGateway(gateway){
    let headers = new Headers();
    headers.append('content-Type','application/json');
    let ep='http://localhost:8080/gateways/register';
    return this.http.post(ep, gateway, {headers:headers}).map(res =>res.json())
  }


}
