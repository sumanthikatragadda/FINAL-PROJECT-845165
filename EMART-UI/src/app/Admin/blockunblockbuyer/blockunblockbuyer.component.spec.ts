import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockunblockbuyerComponent } from './blockunblockbuyer.component';

describe('BlockunblockbuyerComponent', () => {
  let component: BlockunblockbuyerComponent;
  let fixture: ComponentFixture<BlockunblockbuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockunblockbuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockunblockbuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
