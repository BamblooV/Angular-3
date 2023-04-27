import { Component, EventEmitter, Output } from '@angular/core';
import { ICountry } from './models/icountryes';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
})
export class CartComponent {
  @Output()
  navigate = new EventEmitter<string>();

  exchangeCurrency$ = new BehaviorSubject<string>('USD');
  currencySymbol = '$';

  changeCurrency(country: ICountry) {
    this.exchangeCurrency$.next(Object.keys(country.currencies)[0]);
    this.currencySymbol =
      country.currencies[this.exchangeCurrency$.value].symbol;
  }

  handleNavigate() {
    this.navigate.emit('list');
  }
}
