import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Register } from '../models/register';


@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styleUrls: ['./personalinformation.component.css']
})
export class PersonalinformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  parent: FormGroup;

  @Output()
  dateofbirth: EventEmitter<any> = new EventEmitter<any>();

  sendAge(){
    // console.log(this.parent.get('personalInfo')?.value);
    this.dateofbirth.emit(this.parent.get('personalInfo')?.value);
  }

}
