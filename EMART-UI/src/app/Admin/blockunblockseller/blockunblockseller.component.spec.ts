import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockunblocksellerComponent } from './blockunblockseller.component';

describe('BlockunblocksellerComponent', () => {
  let component: BlockunblocksellerComponent;
  let fixture: ComponentFixture<BlockunblocksellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockunblocksellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockunblocksellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
