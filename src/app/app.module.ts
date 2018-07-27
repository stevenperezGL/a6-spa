import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HomeService} from './home/home.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
