import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayChildComponent } from './array-child.component';

describe('ArrayChildComponent', () => {
  let component: ArrayChildComponent;
  let fixture: ComponentFixture<ArrayChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
