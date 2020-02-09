
import {RouterModule, Routes,  } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { SaleBuyComponent } from './components/sale-buy/sale-buy.component';
import { SaleProductsComponent } from './components/sale-products/sale-products.component';

const APP_ROUTES: Routes = [
  {path: 'product' , component: ProductsComponent},
  {path: 'buySale' , component: SaleBuyComponent},
  {path: 'saleProduct' , component: SaleProductsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'product' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
