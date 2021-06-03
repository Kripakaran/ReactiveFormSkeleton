import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Observable, forkJoin } from 'rxjs';
import { Item } from '../../models/item.interface';
import { Product } from '../../models/product.interface';
import { StockInventoryService } from '../../stock-inventory.service';




@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {

  constructor(private fb: FormBuilder, private StockInventoryService: StockInventoryService) { }

  productMap: Map<number, Product>;
  products: Product[];
  total: number;
  
  form = this.fb.group({
    branch: this.fb.group({
      code: '',
      manager: ''
    }),

    selector: this.getStock({}),

    stock: this.fb.array(
      [  
      ]
    )
  });

    getStock(stock: {productID?: number, quantity?: number}){
      return  this.fb.group({
        productID : stock.productID || '',
        quantity: stock.quantity || 10
      })
    }


    calculateTotal(value: Item[]){
      
      const total = value.reduce((prev,next) => {

        let val = next.productID;
        if (typeof val === 'string'){
          val = parseInt(val)
        }
        const val2 = this.productMap.get(val);
        let val4 = 0;
        // console.log(prev);
        if(val2){
          val4 = val2.price;
        }
        // console.log(val2);
        // console.log(val4);
        return (prev + (next.quantity * val4));
      }, 0);


      
      this.total = total;
    }
  ngOnInit() {
    const cart = this.StockInventoryService.getCart();
    const product = this.StockInventoryService.getProduct();


    // cart.subscribe(res => {
    //   console.log(res);
    // });

    // product.subscribe(res => {
    //   console.log(res);
    // });

    // combining 2 observables into 1 using forkJoin

    const values$ = forkJoin(cart, product).subscribe(([cart, product]) => {
      // console.log('cart', cart);
      // console.log('product', product);
      const myMap = product.map<[number, Product]>(prod => [prod.id, prod]); // creating a map with product id and product itself
      // console.log('generated map', myMap);

      this.productMap = new Map<number, Product>(myMap); // copying this map into our productMap so we can send this out to child selector


      // console.log('final product map', this.productMap);

      this.products = product;
      cart.forEach(item => this.addOrder(item));
      this.calculateTotal(this.form.get('stock')?.value);

      this.form.get('stock')?.valueChanges.subscribe(res => {
        // console.log(res);
        return this.calculateTotal(res);
      });

    });

  }


  onSubmit(){
    console.log(this.form.value);
  }


  addOrder(stock: {productID?: number, quantity?: number} ){
    // console.log(typeof(stock.productID));
    // console.log(stock);
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
