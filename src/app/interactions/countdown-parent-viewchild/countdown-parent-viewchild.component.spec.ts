import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentViewchildComponent } from './countdown-parent-viewchild.component';

describe('CountdownParentViewchildComponent', () => {
  let component: CountdownParentViewchildComponent;
  let fixture: ComponentFixture<CountdownParentViewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownParentViewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownParentViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
