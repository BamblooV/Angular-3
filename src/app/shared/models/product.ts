export interface IProduct {
  id?: number;
  title: string;
  price: number;
}

export type ICartItem = IProduct & { quantity: number };
