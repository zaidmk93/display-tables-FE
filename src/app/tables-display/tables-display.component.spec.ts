import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesDisplayComponent } from './tables-display.component';

describe('TablesDisplayComponent', () => {
  let component: TablesDisplayComponent;
  let fixture: ComponentFixture<TablesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
