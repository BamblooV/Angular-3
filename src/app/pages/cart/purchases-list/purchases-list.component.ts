import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ICartItem } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ExchangeAPIService } from '../services/exchange-api.service';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.less'],
})
export class PurchasesListComponent implements OnInit, OnDestroy {
  @Input()
  exchangeCurrency$!: BehaviorSubject<string>;
  @Input()
  currencySymbol = '$';

  @Output()
  btnClick = new EventEmitter<string>();

  cartItems: ICartItem[] = [];
  totalPrice: number = 0;
  viewTotalPrice: number = 0;
  clearSubs = new Subject();

  constructor(
    private cart: CartService,
    private exchange: ExchangeAPIService
  ) {}
  ngOnDestroy(): void {
    this.clearSubs.next(1);
  }

  ngOnInit(): void {
    this.getPurchases();
    this.cart.totalPrice$.pipe(takeUntil(this.clearSubs)).subscribe((v) => {
      this.totalPrice = v;
      this.transferCurrency();
    });
    this.exchangeCurrency$.subscribe(() => {
      this.transferCurrency();
    });
  }

  getPurchases() {
    this.cartItems = this.cart.getCartItems();
  }

  deletePurchase(item: ICartItem): void {
    this.cart.deleteItem(item);
    this.getPurchases();
  }

  patchPurchase(item: ICartItem): void {
    this.cart.patchCartItem(item);
    this.getPurchases();
  }

  transferCurrency() {
    this.exchange
      .exchange(this.exchangeCurrency$.value, this.totalPrice)
      .subscribe((res) => {
        this.viewTotalPrice = res.result;
      });
  }

  handleButtonClick() {
    this.btnClick.emit('list');
  }
}
