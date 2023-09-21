import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaradenizCardComponent } from './karadeniz-card.component';

describe('KaradenizCardComponent', () => {
  let component: KaradenizCardComponent;
  let fixture: ComponentFixture<KaradenizCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaradenizCardComponent]
    });
    fixture = TestBed.createComponent(KaradenizCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
