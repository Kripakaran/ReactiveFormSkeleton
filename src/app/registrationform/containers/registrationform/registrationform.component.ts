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
    })
  });

  onSubmit(){
    console.log(this.form.value);
  }




}
