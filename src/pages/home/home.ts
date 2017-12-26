import { DeviceProvider } from './../../providers/device/device';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  GATEWAYS=[]
  constructor(private deviceProviders: DeviceProvider) {}
  showthis=""
  
  getDataofGateways(){
    this.deviceProviders.findAllGateway().subscribe(data=>{
      console.log('calling provider');
      if(data.success){
        console.log(data);
        this.GATEWAYS = data.gateways;
      }
    })
  }
  }
