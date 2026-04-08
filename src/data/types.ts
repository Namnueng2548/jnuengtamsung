export interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  price: number;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}
