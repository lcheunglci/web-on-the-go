export interface Order {
  id: string;
  description: string;
  items: {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }[];
  date: string;
  total: number;
  status: string;
}
