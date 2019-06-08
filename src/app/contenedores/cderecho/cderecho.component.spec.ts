import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CderechoComponent } from './cderecho.component';

describe('CderechoComponent', () => {
  let component: CderechoComponent;
  let fixture: ComponentFixture<CderechoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CderechoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CderechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
