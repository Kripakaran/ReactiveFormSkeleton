import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationformComponent } from './containers/registrationform/registrationform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistrationformComponent
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
