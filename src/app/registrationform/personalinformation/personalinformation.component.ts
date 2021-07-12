import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

}
