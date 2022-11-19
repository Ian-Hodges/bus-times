import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrentBartonOverviewComponent } from './trent-barton-overview.component';

describe('TrentBartonOverviewComponent', () => {
  let component: TrentBartonOverviewComponent;
  let fixture: ComponentFixture<TrentBartonOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrentBartonOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrentBartonOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
