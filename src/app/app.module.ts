import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrentBartonOverviewComponent } from './components/trent-barton-overview/trent-barton-overview.component';
import { NottinghamCityTransportOverviewComponent } from './components/nottingham-city-transport-overview/nottingham-city-transport-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    TrentBartonOverviewComponent,
    NottinghamCityTransportOverviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
