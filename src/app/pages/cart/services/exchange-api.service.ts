import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExchange } from '../models/iexchange';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExchangeAPIService {
  url = 'https://api.apilayer.com/exchangerates_data/';

  headers = new HttpHeaders().set('apikey', 'osaiP68VX6c8DKC1COrFc6ncwotQmCLS');

  constructor(private http: HttpClient) {}

  exchange(to: string, amount: number): Observable<IExchange> {
    if (to === 'USD') {
      return new Observable((subscriber) => {
        subscriber.next({ result: amount });
        subscriber.complete();
      });
    }
    return this.http.get<IExchange>(
      `${this.url}convert?to=${to}&from=USD&amount=${amount}`,
      { headers: this.headers }
    );
  }
}
