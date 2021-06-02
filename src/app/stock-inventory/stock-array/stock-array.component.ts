import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Product } from '../models/product.interface';


@Component({
  selector: 'app-stock-array',
  templateUrl: './stock-array.component.html',
  styleUrls: ['./stock-array.component.css']
})
export class StockArrayComponent implements OnInit {

  constructor() { }

  @Input()
  parent: FormGroup;

  @Input()
  map: Map<number, Product>;
  
  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  getProductById(id:number){
    return this.map.get(id); 
  // return is very important here lol
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
