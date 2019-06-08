import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicicloideComponent } from './epicicloide.component';

describe('EpicicloideComponent', () => {
  let component: EpicicloideComponent;
  let fixture: ComponentFixture<EpicicloideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicicloideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicicloideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
