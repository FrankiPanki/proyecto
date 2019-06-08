import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CizquierdoComponent } from './cizquierdo.component';

describe('CizquierdoComponent', () => {
  let component: CizquierdoComponent;
  let fixture: ComponentFixture<CizquierdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CizquierdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CizquierdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
