export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface OrderItem {
  product: IProduct;
  quantity: number;
  subtotal: number;
}
