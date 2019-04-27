import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotorModule } from '../motor/motor.module';
import { ColorPickerModule } from '../color-picker/color-picker.module';
import { BluetoothModule } from '../bluetooth/bluetooth.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MotorModule,
    BluetoothModule,
    ColorPickerModule
  ],
  exports: [
    MotorModule,
    DashboardComponent,
    BluetoothModule,
    ColorPickerModule
  ]
})
export class DashboardModule { }
