import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { routes} from './app.route';
import { Route } from './app.route';
import { HolidayService } from './holiday.service';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatCardModule,
    RouterModule.forRoot(routes),

    Route
  ],
  providers: [HolidayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
