import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartItem, IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent {
  @Input()
  item!: IProduct;

  @Output()
  addToCart = new EventEmitter<ICartItem>();

  quantity: number = 1;

  onButtonClick() {
    if (this.quantity <= 0) {
      return;
    }
    if (this.quantity > 99) {
      this.quantity = 99;
    }
    this.addToCart.emit({
      ...this.item,
      quantity: this.quantity,
    });
  }
}
