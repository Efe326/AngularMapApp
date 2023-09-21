import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastMapComponent } from './east-map.component';

describe('EastMapComponent', () => {
  let component: EastMapComponent;
  let fixture: ComponentFixture<EastMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EastMapComponent]
    });
    fixture = TestBed.createComponent(EastMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
