import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WheelComponent } from './wheel/wheel.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    WheelComponent,
    TableComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
