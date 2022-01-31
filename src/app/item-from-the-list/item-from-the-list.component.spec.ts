import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFromTheListComponent } from './item-from-the-list.component';

describe('ItemFromTheListComponent', () => {
  let component: ItemFromTheListComponent;
  let fixture: ComponentFixture<ItemFromTheListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFromTheListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFromTheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
