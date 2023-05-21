export type Items  = {
  author: {
    name: string;
    lastname: string;
  }
  categories: string[];
  items: Item[];
}

export type Item = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  },
  picture: string;
  condition: string;
  free_shipping: boolean;
  seller_address: string;
}