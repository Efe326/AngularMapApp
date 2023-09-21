import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcAnadoluCardComponent } from './ic-anadolu-card.component';

describe('IcAnadoluCardComponent', () => {
  let component: IcAnadoluCardComponent;
  let fixture: ComponentFixture<IcAnadoluCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcAnadoluCardComponent]
    });
    fixture = TestBed.createComponent(IcAnadoluCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
