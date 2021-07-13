import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Register } from '../../models/register';
import { RegistrationformService } from './registrationform.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  constructor(private fb: FormBuilder, private registrationform: RegistrationformService) { }

  ngOnInit(): void {
    // const details = this.registrationform.getDetails().subscribe(res => {
    //   console.log(res);
    // });
  }

  registered: Register;

  submitted: boolean = false;

  form = this.fb.group({
    personalInfo: this.fb.group({
      firstName: this.fb.control('', [Validators.required]),
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
    this.submitted = true;
    this.registered = Object.assign({}, this.form.value);
    console.log('the form', this.form.value);
    console.log('the register object', this.registered);
    this.registrationform.postDetails(this.registered).subscribe(res=>{
      console.log(res);
    });
  }




}
