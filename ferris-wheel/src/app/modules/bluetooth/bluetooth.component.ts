import { Component, OnInit } from '@angular/core';

import { BluetoothService } from '../../_services/bluetooth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.component.html',
  styleUrls: ['./bluetooth.component.scss']
})
export class BluetoothComponent implements OnInit {

  get device() {
    return this.bluetooth.device$;
  }

  constructor(private bluetooth: BluetoothService) { }

  connect() {
    this.bluetooth.connect();
  }

  disconnect() {
    this.bluetooth.disconnect();
  }


  ngOnInit() {
  }
}
