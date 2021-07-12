import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressinformationComponent } from './addressinformation.component';

describe('AddressinformationComponent', () => {
  let component: AddressinformationComponent;
  let fixture: ComponentFixture<AddressinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
