import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './models/item.interface';
import { Observable } from 'rxjs';
import { Product } from './models/product.interface';


const CARTAPI: string = 'http://localhost:3000/cart';

const PRODUCTAPI: string = 'http://localhost:3000/products';


@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  constructor(private http: HttpClient) { }


  getCart(): Observable<Item[]> {
    return this.http.get<Item[]>(CARTAPI);
  }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTAPI);
  }
}
