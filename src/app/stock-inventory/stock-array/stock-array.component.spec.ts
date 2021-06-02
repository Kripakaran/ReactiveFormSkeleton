import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockArrayComponent } from './stock-array.component';

describe('StockArrayComponent', () => {
  let component: StockArrayComponent;
  let fixture: ComponentFixture<StockArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
