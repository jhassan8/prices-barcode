import { Product } from "./product.model";

export class Cart {
  id: string;
  product: Product;
  count: number;

  constructor(object?: Cart) {
    this.product = null;
    this.count = null;
    this.id = null;

    if (object) {
      Object.assign(this, object);
    }
  }
}

export function mapCart(object: Product) {
  const mapped = new Cart();
  mapped.id = object.id;
  mapped.product = object;
  mapped.count = 0;
  return mapped;
}
