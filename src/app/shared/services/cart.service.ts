import { Injectable } from '@angular/core';
import { ICartItem } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private data: ICartItem[] = [];
  constructor() {}

  totalPrice$ = new BehaviorSubject<number>(this.getTotalPrice());

  addToCart(item: ICartItem) {
    const itemInCart = this.data.find((i) => i.id === item.id);

    if (itemInCart) {
      itemInCart.quantity = itemInCart.quantity + item.quantity;
      this.totalPrice$.next(this.getTotalPrice());
      return;
    }

    this.data = [...this.data, item];
    this.totalPrice$.next(this.getTotalPrice());
  }

  getTotalPrice() {
    return this.data.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  getCartItems(): ICartItem[] {
    return this.data;
  }

  patchCartItem(item: ICartItem) {
    const itemInCart = this.data.find((i) => i.id === item.id);

    if (itemInCart) {
      itemInCart.quantity = item.quantity;
    }

    this.totalPrice$.next(this.getTotalPrice());
  }

  deleteItem(item: ICartItem) {
    this.data = this.data.filter((i) => i.id !== item.id);
    this.totalPrice$.next(this.getTotalPrice());
  }
}
