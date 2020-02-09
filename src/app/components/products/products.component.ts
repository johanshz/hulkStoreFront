import { Component, OnInit } from '@angular/core';
import { productService } from 'src/app/services/product.services';
import { Product } from '../Models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ productService ]
})
export class ProductsComponent implements OnInit {
public product:Product;
products: any[];
  constructor(
    private _productService: productService,
  ) { 
    this.product = new Product('',0,0);
  }

  onSubmit(form){
    this._productService.setProduct(this.product).subscribe(
      response =>{
          console.log(response);
          form.reset();
          location.reload();
      },
      error =>{
        console.log(<any>error);
      }
    )
    
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

}
