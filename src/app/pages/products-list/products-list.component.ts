import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICartItem, IProduct } from 'src/app/shared/models/product';
import { ProductAPIService } from './service/product-api.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent implements OnInit {
  constructor(
    private productAPI: ProductAPIService,
    private cart: CartService
  ) {}

  @Output()
  toCart = new EventEmitter<string>();

  items: IProduct[] = [];

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productAPI.getAllProducts().subscribe((data) => {
      this.items = data;
    });
  }

  addToCart = (item: ICartItem): void => {
    this.cart.addToCart(item);
  };

  handleButtonClick() {
    this.toCart.emit('cart');
  }
}
