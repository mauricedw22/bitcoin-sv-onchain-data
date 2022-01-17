import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartModule } from 'primeng/chart';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsApiService } from './charts/services/charts-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [ChartsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
