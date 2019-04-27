import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {

  constructor() { }
  
  	connect(){
	  	navigator.bluetooth.requestDevice()
	  	.then(device => { })
	  	.catch(error => {console.log(error); })  
	  }

}


