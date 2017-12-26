import { DeviceProvider } from './../../providers/device/device';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  D_name:String;
  D_type:String;
  UAPI:String;
  EndNode1:String;
  show="";
  constructor(public navCtrl: NavController,private deviceProvider: DeviceProvider) {
  }

  addGateways(){
    console.log("hrshaaaaa")
    let gateway={
      metadata:{
        d_name:this.D_name,
        d_type:this.D_type,
        uAPI:this.UAPI
      },
      endNodes:[this.EndNode1]
    }
    this.deviceProvider.addGateway(gateway).subscribe(data=>{
      this.show = data.msg
      console.log(data.msg)
    });
  }

}
