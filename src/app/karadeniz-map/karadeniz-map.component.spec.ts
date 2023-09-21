import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaradenizMapComponent } from './karadeniz-map.component';

describe('KaradenizMapComponent', () => {
  let component: KaradenizMapComponent;
  let fixture: ComponentFixture<KaradenizMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaradenizMapComponent]
    });
    fixture = TestBed.createComponent(KaradenizMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
