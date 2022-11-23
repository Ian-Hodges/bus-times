import { Component, OnInit } from '@angular/core';
import { Direction } from 'src/app/models/trent-barton/direction';
import { Service } from 'src/app/models/trent-barton/service';
import { FullStop } from 'src/app/models/trent-barton/fullStop';
import { TrentBartonService } from 'src/app/services/trent-barton/trent-barton.service';
import { Stop } from 'src/app/models/trent-barton/stop';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private trentBartonService: TrentBartonService, private activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getServices();

    this.activatedroute.params.subscribe(params => {
      const initialStopId = params['initialStopId'];
      this.getStop(initialStopId);
    });
  }

  getServices() {
    this.services = [];
    this.directions = [];
    this.stops = [];
    this.trentBartonService
      .getServices()
      .subscribe(services => this.services = services);
  }

  getStop(stopId: number) {
    this.trentBartonService
      .getStop(stopId)
      .subscribe(fullStops => this.fullStops = fullStops);
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
    this.getStop(stopId.target.value);
  }
}
