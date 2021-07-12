import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  form = this.fb.group({
    personalInfo: this.fb.group({
      firstName: '',
      lastName: ''
    }),
    addressInfo: this.fb.group({
      streetName: '',
      aptNumber: '',
      city: '',
      state: '',
      zipCode: ''
    }),
    employmentInfo: this.fb.group({
      companyName: '',
      position: '',
      salary: '',
    }),
    educationInfo: this.fb.group({
      univName: '',
      degree: '',
      gpa: ''
    }),
    relationshipInfo: this.fb.group({
      status: '',
      dependants: ''
    }),
    skills: this.fb.group({
      hobbies: '',
      skills: ''
    })
  });

  onSubmit(){
    console.log(this.form.value);
  }




}
