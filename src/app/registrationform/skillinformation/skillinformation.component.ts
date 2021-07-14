import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skillinformation',
  templateUrl: './skillinformation.component.html',
  styleUrls: ['./skillinformation.component.css']
})
export class SkillinformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('hobbies', this.parent.get('skills')?.get('hobbies')?.value);
  }


  @Input()
  parent: FormGroup;

  getSkills(){
  return this.parent.get('skills')?.get('skills')?.value;
}

getHobbies(){
  return this.parent.get('skills')?.get('hobbies')?.value;
}
  isLinear = false;


}
