import { Component, OnInit } from '@angular/core';

import { BluetoothService } from '../../_services/bluetooth.service';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss']
})
export class MotorComponent implements OnInit {

  constructor(private bluetooth: BluetoothService) { }

  ngOnInit() {
  }

  send(data) {
    this.bluetooth.send(data);
  }

}
