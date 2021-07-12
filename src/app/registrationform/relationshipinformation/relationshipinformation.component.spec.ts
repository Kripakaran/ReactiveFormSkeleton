import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipinformationComponent } from './relationshipinformation.component';

describe('RelationshipinformationComponent', () => {
  let component: RelationshipinformationComponent;
  let fixture: ComponentFixture<RelationshipinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationshipinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
