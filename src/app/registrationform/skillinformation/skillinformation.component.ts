import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skillinformation',
  templateUrl: './skillinformation.component.html',
  styleUrls: ['./skillinformation.component.css']
})
export class SkillinformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input()
  parent: FormGroup;


}
