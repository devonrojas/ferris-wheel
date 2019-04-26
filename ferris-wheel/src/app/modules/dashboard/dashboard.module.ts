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
    ColorPickerModule,
    BluetoothModule
  ]
})
export class DashboardModule { }
