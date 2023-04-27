import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesListComponent } from './purchases-list.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { CartService } from 'src/app/shared/services/cart.service';
import { CardModule } from './card/card.module';
import { IExchangeToken } from '../models/iexchange';
import { ExchangeAPIService } from '../services/exchange-api.service';

@NgModule({
  declarations: [PurchasesListComponent],
  imports: [CommonModule, ButtonModule, CardModule],
  exports: [PurchasesListComponent],
  providers: [
    CartService,
    { provide: IExchangeToken, useClass: ExchangeAPIService },
  ],
})
export class PurchasesListModule {}
