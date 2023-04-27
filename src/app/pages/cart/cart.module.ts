import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { PurchasesListModule } from './purchases-list/purchases-list.module';
import { FormModule } from './form/form.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, PurchasesListModule, FormModule],
  exports: [CartComponent],
})
export class CartModule {}
