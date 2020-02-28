import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSellerProfileComponent } from './edit-seller-profile.component';

describe('EditSellerProfileComponent', () => {
  let component: EditSellerProfileComponent;
  let fixture: ComponentFixture<EditSellerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSellerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSellerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
