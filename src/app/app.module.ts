import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DataModule } from './module/data/data.module';
import { DataServiceModule } from './service/data-service/data-service.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataModule
  ],
  providers: [
    DataServiceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
