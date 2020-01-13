import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistBookComponent } from './wishlist-book.component';

describe('WishlistBookComponent', () => {
  let component: WishlistBookComponent;
  let fixture: ComponentFixture<WishlistBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
