import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationformComponent } from './containers/registrationform/registrationform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalinformationComponent } from './personalinformation/personalinformation.component';
import { AddressinformationComponent } from './addressinformation/addressinformation.component';
import { EmploymentinformationComponent } from './employmentinformation/employmentinformation.component';
import { EducationinformationComponent } from './educationinformation/educationinformation.component';
import { RelationshipinformationComponent } from './relationshipinformation/relationshipinformation.component';
import { SkillinformationComponent } from './skillinformation/skillinformation.component';




@NgModule({
  declarations: [
    RegistrationformComponent,
    PersonalinformationComponent,
    AddressinformationComponent,
    EmploymentinformationComponent,
    EducationinformationComponent,
    RelationshipinformationComponent,
    SkillinformationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:
  [
    RegistrationformComponent
  ]
})
export class RegistrationformModule { }
