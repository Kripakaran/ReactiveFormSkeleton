import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillinformationComponent } from './skillinformation.component';

describe('SkillinformationComponent', () => {
  let component: SkillinformationComponent;
  let fixture: ComponentFixture<SkillinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
