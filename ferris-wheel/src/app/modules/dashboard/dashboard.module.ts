import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotorModule } from '../motor/motor.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MotorModule
  ],
  exports: [
    MotorModule,
    DashboardComponent
  ]
})
export class DashboardModule { }
