import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-educationinformation',
  templateUrl: './educationinformation.component.html',
  styleUrls: ['./educationinformation.component.css']
})
export class EducationinformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  parent: FormGroup;

}
