import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarribaComponent } from './carriba.component';

describe('CarribaComponent', () => {
  let component: CarribaComponent;
  let fixture: ComponentFixture<CarribaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarribaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
