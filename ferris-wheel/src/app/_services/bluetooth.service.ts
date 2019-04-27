import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {

  constructor() { }
  
  	connect(){
	  	navigator.bluetooth.requestDevice({
	  		acceptAllDevices:true
	  	})
	  	.then(device => { console.log(device) })
	  	.catch(error => {console.log(error); })  
	  }

}


