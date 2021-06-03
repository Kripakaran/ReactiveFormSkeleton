import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Product } from '../models/product.interface';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.css']
})
export class StockSelectorComponent implements OnInit {

  constructor() { }

  @Input()
  parent: FormGroup;


  @Input()
  products: Product[];


  @Output()
  order: EventEmitter<any> = new EventEmitter();

  handleOrder() {
    this.order.emit(this.parent.get('selector')?.value);
    console.log(this.parent.get('selector'));

    this.parent.get('selector')?.reset({
      productID: '',
      quantity: 10
    })
    console.log(this.order);
  }

  ngOnInit(): void {
  }

}
