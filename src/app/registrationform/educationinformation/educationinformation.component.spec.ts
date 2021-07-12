import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationinformationComponent } from './educationinformation.component';

describe('EducationinformationComponent', () => {
  let component: EducationinformationComponent;
  let fixture: ComponentFixture<EducationinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
