import { InjectionToken } from '@angular/core';

export interface IExchange {
  result: number;
}

export const IExchangeToken = new InjectionToken('IExchangeToken');
