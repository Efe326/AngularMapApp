import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcanadoluMapComponent } from './icanadolu-map.component';

describe('IcanadoluMapComponent', () => {
  let component: IcanadoluMapComponent;
  let fixture: ComponentFixture<IcanadoluMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcanadoluMapComponent]
    });
    fixture = TestBed.createComponent(IcanadoluMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
