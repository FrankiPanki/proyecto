import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosenoComponent } from './coseno.component';

describe('CosenoComponent', () => {
  let component: CosenoComponent;
  let fixture: ComponentFixture<CosenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
