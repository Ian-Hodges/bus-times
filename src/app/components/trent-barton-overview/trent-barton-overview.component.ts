import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Stop as Stop } from 'src/app/models/trent-barton/stop';
import { TrentBartonService } from 'src/app/services/trent-barton/trent-barton.service';

@Component({
  selector: 'app-trent-barton-overview',
  templateUrl: './trent-barton-overview.component.html',
  styleUrls: ['./trent-barton-overview.component.css'],
})
export class TrentBartonOverviewComponent implements OnInit {
  favStops = [19321, 18830, 16900];
  stops: Stop[] = [];

  constructor(private trentBartonService: TrentBartonService) {}

  ngOnInit(): void {}

  onSelect(stopId: any) {
    this.stops = [];
    this.trentBartonService
      .getStop(stopId.target.value)
      .subscribe((route) => (this.stops = route));
  }
}
