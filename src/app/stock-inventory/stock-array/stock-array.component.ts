import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-stock-array',
  templateUrl: './stock-array.component.html',
  styleUrls: ['./stock-array.component.css']
})
export class StockArrayComponent implements OnInit {

  constructor() { }

  @Input()
  parent: FormGroup;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  get stocks(){
    return (this.parent.get('stock') as FormArray).controls
  }

  handleRemove(item: any, i: number){
    // console.log(item);
    // console.log(i);
    this.remove.emit({item, i})  // cant pass 2 args so pass it both combined as 1 objet
  } 

}
