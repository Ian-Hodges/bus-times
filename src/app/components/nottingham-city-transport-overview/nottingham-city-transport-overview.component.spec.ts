import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NottinghamCityTransportOverviewComponent } from './nottingham-city-transport-overview.component';

describe('NottinghamCityTransportOverviewComponent', () => {
  let component: NottinghamCityTransportOverviewComponent;
  let fixture: ComponentFixture<NottinghamCityTransportOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NottinghamCityTransportOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NottinghamCityTransportOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
