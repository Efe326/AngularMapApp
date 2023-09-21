import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoguCardComponent } from './dogu-card.component';

describe('DoguCardComponent', () => {
  let component: DoguCardComponent;
  let fixture: ComponentFixture<DoguCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoguCardComponent]
    });
    fixture = TestBed.createComponent(DoguCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
