import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarmaraComponent } from './marmara.component';

describe('MarmaraComponent', () => {
  let component: MarmaraComponent;
  let fixture: ComponentFixture<MarmaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarmaraComponent]
    });
    fixture = TestBed.createComponent(MarmaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
