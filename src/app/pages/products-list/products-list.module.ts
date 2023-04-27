import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { CardModule } from './card/card.module';

import { ProductAPIService } from './service/product-api.service';
import { CartService } from 'src/app/shared/services/cart.service';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, ButtonModule, CardModule],
  exports: [ProductsListComponent],
  providers: [ProductAPIService, CartService],
})
export class ProductsListModule {}
