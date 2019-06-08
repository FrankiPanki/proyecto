import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloideComponent } from './cicloide.component';

describe('CicloideComponent', () => {
  let component: CicloideComponent;
  let fixture: ComponentFixture<CicloideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
