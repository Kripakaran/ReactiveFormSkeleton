import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Product } from '../../models/product.interface';




@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  products: Product[] = [
    {
      id: 1,
      price: 1000,
      name: 'MacBook Pro'
    },
    {
      id: 2,
      price: 500,
      name: 'iPad Pro'
    },
    {
      id: 3,
      price: 900,
      name: 'Apple iPhone'
    },
    {
      id: 4,
      price: 300,
      name: 'Apple Watch'
    }
  ]
  
  form = this.fb.group({
    branch: this.fb.group({
      code: '',
      manager: ''
    }),

    selector: this.getStock({}),

    stock: this.fb.array(
      [  
        this.getStock({productID: 2, quantity: 10}),
        this.getStock({productID: 3, quantity: 30})
      ]
    )
  });

    getStock(stock: {productID?: number, quantity?: number}){
      return  this.fb.group({
        productID : stock.productID || '',
        quantity: stock.quantity || 10
      })
    }
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
  }


  addOrder(stock: {productID?: number, quantity?: number} ){
    // console.log(event);
    const control = this.form.get('stock') as FormArray;
    control.push(this.getStock(stock));
  }

  removeOrder({item, i}: {item:any, i:number}){
    console.log(item);
    console.log(i);
    const control = this.form.get('stock') as FormArray;
    control.removeAt(i);
  }
} 
