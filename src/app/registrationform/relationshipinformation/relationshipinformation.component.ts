import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-relationshipinformation',
  templateUrl: './relationshipinformation.component.html',
  styleUrls: ['./relationshipinformation.component.css']
})
export class RelationshipinformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input()
  parent: FormGroup;

}
