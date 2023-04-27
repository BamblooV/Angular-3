import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICountry } from '../models/icountryes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryesAPIService {
  url = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.url);
  }
}
