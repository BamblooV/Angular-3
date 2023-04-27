import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartItem } from 'src/app/shared/models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent {
  @Input()
  item!: ICartItem;

  @Output()
  deleteItem = new EventEmitter<ICartItem>();

  @Output()
  patchItem = new EventEmitter<ICartItem>();

  deletePurchase() {
    this.deleteItem.emit(this.item);
  }

  patchPurchase(event: any) {
    this.patchItem.emit({
      ...this.item,
      quantity: Number(event.target?.value),
    });
  }
}
