import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DashboardModule } from './modules/dashboard/dashboard.module';

import { AppComponent } from './app.component';

import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';

import { BluetoothService } from './_services/bluetooth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebBluetoothModule.forRoot(),
    DashboardModule,
  ],
  providers: [BluetoothService],
  bootstrap: [AppComponent]
})
export class AppModule { }
