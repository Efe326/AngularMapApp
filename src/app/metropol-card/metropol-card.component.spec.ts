import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetropolCardComponent } from './metropol-card.component';

describe('MetropolCardComponent', () => {
  let component: MetropolCardComponent;
  let fixture: ComponentFixture<MetropolCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetropolCardComponent]
    });
    fixture = TestBed.createComponent(MetropolCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
