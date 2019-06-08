import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipocicloideComponent } from './hipocicloide.component';

describe('HipocicloideComponent', () => {
  let component: HipocicloideComponent;
  let fixture: ComponentFixture<HipocicloideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipocicloideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipocicloideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
