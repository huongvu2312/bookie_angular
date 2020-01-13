import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroppedBookComponent } from './dropped-book.component';

describe('DroppedBookComponent', () => {
  let component: DroppedBookComponent;
  let fixture: ComponentFixture<DroppedBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroppedBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroppedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
