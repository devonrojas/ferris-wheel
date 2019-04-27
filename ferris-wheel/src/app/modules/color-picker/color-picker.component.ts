import { Component, OnInit } from '@angular/core';

import { BluetoothService } from '../../_services/bluetooth.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  speed: number = 1;

  public hue: string
  public color: string

  constructor(private bluetooth: BluetoothService) { }

  ngOnInit() {
  }

  send(data) {
    let str = `${data}${this.speed}`;
    this.bluetooth.send(str);
  }
}
