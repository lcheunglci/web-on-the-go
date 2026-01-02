export interface Order {
  id: string;
  description: string;
  items: Record<string, { quantity: number }>;
  date: string;
  total: number;
  status: string;
}
