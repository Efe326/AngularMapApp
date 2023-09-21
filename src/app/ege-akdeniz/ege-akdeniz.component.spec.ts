import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgeAkdenizComponent } from './ege-akdeniz.component';

describe('EgeAkdenizComponent', () => {
  let component: EgeAkdenizComponent;
  let fixture: ComponentFixture<EgeAkdenizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EgeAkdenizComponent]
    });
    fixture = TestBed.createComponent(EgeAkdenizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
