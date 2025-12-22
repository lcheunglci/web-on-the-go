export interface Order {
  id: string;
  description: string;
  items: Record<string, { quantity: number }>;
}
