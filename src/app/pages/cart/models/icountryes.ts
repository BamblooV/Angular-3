import { InjectionToken } from '@angular/core';

export interface ICountry {
  name: {
    official: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
}

export const ICountryesToken = new InjectionToken('ICountryesToken');
