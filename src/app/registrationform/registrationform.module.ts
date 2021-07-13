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
import { FormviewerComponent } from './formviewer/formviewer.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationformService } from './containers/registrationform/registrationform.service';




@NgModule({
  declarations: [
    RegistrationformComponent,
    PersonalinformationComponent,
    AddressinformationComponent,
    EmploymentinformationComponent,
    EducationinformationComponent,
    RelationshipinformationComponent,
    SkillinformationComponent,
    FormviewerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    RegistrationformComponent
  ],
  providers:[
    RegistrationformService
  ]
})
export class RegistrationformModule { }
