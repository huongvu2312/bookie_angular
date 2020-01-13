import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedBookComponent } from './finished-book.component';

describe('FinishedBookComponent', () => {
  let component: FinishedBookComponent;
  let fixture: ComponentFixture<FinishedBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
