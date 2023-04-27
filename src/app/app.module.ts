import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListModule } from './pages/products-list/products-list.module';
import { HttpClientModule } from '@angular/common/http';
import { PurchasesListModule } from './pages/cart/purchases-list/purchases-list.module';
import { CartModule } from './pages/cart/cart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProductsListModule,
    PurchasesListModule,
    CartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
