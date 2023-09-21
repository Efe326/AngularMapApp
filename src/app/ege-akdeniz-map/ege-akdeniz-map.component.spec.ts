import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgeAkdenizMapComponent } from './ege-akdeniz-map.component';

describe('EgeAkdenizMapComponent', () => {
  let component: EgeAkdenizMapComponent;
  let fixture: ComponentFixture<EgeAkdenizMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EgeAkdenizMapComponent]
    });
    fixture = TestBed.createComponent(EgeAkdenizMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
