import { Component, OnInit } from '@angular/core';

import { BluetoothService } from '../../_services/bluetooth.service';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.component.html',
  styleUrls: ['./bluetooth.component.scss']
})
export class BluetoothComponent implements OnInit {

  constructor(private bluetooth: BluetoothService) { 

  }

  connect() {
  this.bluetooth.connect();
  }


  ngOnInit() {
  }
}

