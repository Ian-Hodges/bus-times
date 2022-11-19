import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NottinghamCityTransportOverviewComponent } from './components/nottingham-city-transport-overview/nottingham-city-transport-overview.component';
import { TrentBartonOverviewComponent } from './components/trent-barton-overview/trent-barton-overview.component';

const routes: Routes = [
  { path: 'trent-barton-overview', component: TrentBartonOverviewComponent },
  {
    path: 'nottingham-city-transport-overview',
    component: NottinghamCityTransportOverviewComponent,
  },
  { path: '', redirectTo: '/trent-barton-overview', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
