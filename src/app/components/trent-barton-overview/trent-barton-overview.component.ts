import { Component, OnInit } from '@angular/core';
import { Direction } from 'src/app/models/trent-barton/direction';
import { Service } from 'src/app/models/trent-barton/service';
import { FullStop } from 'src/app/models/trent-barton/fullStop';
import { TrentBartonService } from 'src/app/services/trent-barton/trent-barton.service';
import { Stop } from 'src/app/models/trent-barton/stop';

@Component({
  selector: 'app-trent-barton-overview',
  templateUrl: './trent-barton-overview.component.html',
  styleUrls: ['./trent-barton-overview.component.css'],
})
export class TrentBartonOverviewComponent implements OnInit {
  services: Service[] = [];
  directions: Direction[] = [];
  stops: Stop[] = [];
  fullStops: FullStop[] = [];

  constructor(private trentBartonService: TrentBartonService) {}

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.services = [];
    this.directions = [];
    this.stops = [];
    this.trentBartonService
      .getServices()
      .subscribe(services => this.services = services);
  }

  onSelectService(serviceId: any) {
    this.directions = [];
    this.stops = [];
    this.trentBartonService
      .getDirections(serviceId.target.value)
      .subscribe(directions => this.directions = directions);
  }

  onSelectDirection(directionId: any) {
    this.stops = [];
    this.trentBartonService
      .getStops(directionId.target.value)
      .subscribe(stops => this.stops = stops);
  }

  onSelectStop(stopId: any) {
    this.trentBartonService
      .getStop(stopId.target.value)
      .subscribe(fullStops => this.fullStops = fullStops);
  }
}
