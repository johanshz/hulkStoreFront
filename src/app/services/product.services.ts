import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ProductsComponent } from '../components/products/products.component';
import { Quantity } from '../components/Models/quantity';

@Injectable()
export class productService {
 public url:string = 'http://localhost:8080/hulkstore/product/';
 public urlSale:string = 'http://localhost:8080/hulkstore/product/sale/';
 public urlBuy:string = 'http://localhost:8080/hulkstore/product/buy/';
    constructor(private http: HttpClient){
    }
   getProduct(): Observable<ProductsComponent[]>{
       return this.http.get(this.url).pipe(
           map(response => response as ProductsComponent[])
       );
   }
setProduct(Product):Observable<any>{
    let json = JSON.stringify(Product);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url,json,{headers:headers});
}
buyProduct(Quantity,id):Observable<any>{
    debugger;
    let json = JSON.stringify(Quantity);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.urlBuy+id,json,{headers:headers});
}
saleProduct(Quantity,id):Observable<any>{
    debugger;
    let json = JSON.stringify(Quantity);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.urlSale+id,json,{headers:headers});
}
}