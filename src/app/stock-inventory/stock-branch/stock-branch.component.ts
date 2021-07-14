import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-branch',
  templateUrl: './stock-branch.component.html',
  styleUrls: ['./stock-branch.component.css']
})
export class StockBranchComponent implements OnInit {

  constructor() { }



  @Input()
  parent: FormGroup;



  ngOnInit(): void {
  }

}