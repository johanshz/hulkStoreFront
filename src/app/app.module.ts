import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




//rutas
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { SaleBuyComponent } from './components/sale-buy/sale-buy.component';
import { SaleProductsComponent } from './components/sale-products/sale-products.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    SaleBuyComponent,
    SaleProductsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
