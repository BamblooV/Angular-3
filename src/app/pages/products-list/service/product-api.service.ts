import { Injectable } from '@angular/core';
import { ProductsListModule } from '../products-list.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IProduct } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductAPIService {
  url = 'http://localhost:3000/product';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }
}
