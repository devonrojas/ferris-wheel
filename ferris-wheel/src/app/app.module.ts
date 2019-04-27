import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardModule } from './modules/dashboard/dashboard.module';

import { AppComponent } from './app.component';

import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebBluetoothModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
