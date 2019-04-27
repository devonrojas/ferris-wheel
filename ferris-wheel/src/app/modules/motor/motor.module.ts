import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotorComponent } from './motor.component';
import { MotorSpeedComponent } from './motor-speed/motor-speed.component';
import { MotorDirectionComponent } from './motor-direction/motor-direction.component';

@NgModule({
  declarations: [MotorComponent, MotorSpeedComponent, MotorDirectionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MotorComponent
  ]
})
export class MotorModule { }
