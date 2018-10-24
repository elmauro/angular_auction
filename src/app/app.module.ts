import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AuctionComponent } from './auction/auction.component';
import { CurrentauctionComponent } from './currentauction/currentauction.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AuctionComponent,
    CurrentauctionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
