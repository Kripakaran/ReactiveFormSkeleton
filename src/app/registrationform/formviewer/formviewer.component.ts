import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Register } from '../models/register';

@Component({
  selector: 'app-formviewer',
  templateUrl: './formviewer.component.html',
  styleUrls: ['./formviewer.component.css']
})
export class FormviewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  details: Register;

}
