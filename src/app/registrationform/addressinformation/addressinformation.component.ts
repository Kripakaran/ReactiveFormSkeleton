import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addressinformation',
  templateUrl: './addressinformation.component.html',
  styleUrls: ['./addressinformation.component.css']
})
export class AddressinformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input()
  parent: FormGroup;

}
