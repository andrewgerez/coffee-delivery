export interface Coffee {
  id: number;
  name: string;
  description: string;
  type: string[];
  price: number;
  highlight: string;
}

export interface Cart {
  coffee: Coffee;
  quantity: number;
}