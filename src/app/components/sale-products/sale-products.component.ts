import { Component, OnInit } from '@angular/core';
import { productService } from 'src/app/services/product.services';
import { Product } from '../Models/product';
import { Quantity } from '../Models/quantity';

@Component({
  selector: 'app-sale-products',
  templateUrl: './sale-products.component.html',
  styleUrls: ['./sale-products.component.css'],
  providers: [ productService ]
})
export class SaleProductsComponent implements OnInit {
  public product:Product;
  products: any[];
  public quanti:Quantity;
  idProduct: number  = 0;
  public productBuy:Product;
  prueba:boolean = false;
  idProductBuy:number = 0;

  constructor(
    private _productService: productService,
  ) {
    this.product = new Product('',0,0);
    this.quanti = new Quantity(0);
   }

  ngOnInit() {
    this._productService.getProduct().subscribe(
      result => {
        console.log(result);
        this.products = result;
      },
      error => {
        console.log(<any>error);
      }
    )
  }
  create(){
    this.productBuy = this.products[this.idProduct -1];
    this.prueba = true;

  }
  sale(index,product){
    this.idProductBuy = product.id;
    this._productService.saleProduct(this.quanti,this.idProductBuy).subscribe(
      response =>{
          if(response){
            alert("successful sale");
          }else{
            alert("there is no stock");
          } 
          this.prueba = false;
          index.reset();
          location.reload();
      },
      error =>{
        console.log(<any>error);
      }
    )
    
  }

}
