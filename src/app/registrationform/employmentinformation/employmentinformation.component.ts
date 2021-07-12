import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employmentinformation',
  templateUrl: './employmentinformation.component.html',
  styleUrls: ['./employmentinformation.component.css']
})
export class EmploymentinformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  parent: FormGroup;

}
