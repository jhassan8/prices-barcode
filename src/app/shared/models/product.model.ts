import { ProductResponse, Sucursale } from "./product-response.model";

export class Product {
  id: string;
  name: string;
  price: number;
  minPrice: number;
  maxPrice: number;
  prices: Array<Price>;
  count?: number;

  constructor(object?: Product) {
    this.id = null;
    this.name = null;
    this.price = null;
    this.minPrice = null;
    this.maxPrice = null;
    this.prices = null;
    this.count = null;

    if (object) {
      Object.assign(this, object);
    }
  }
}

export class Price {
  id: string;
  name: string;
  price: number;
  today: boolean;

  constructor(object?: Price) {
    this.id = null;
    this.name = null;
    this.price = null;
    this.today = null;

    if (object) {
      Object.assign(this, object);
    }
  }
}

export function mapProduct(object: ProductResponse) {
  const mapped = new Product();
  mapped.id = object.producto.id;
  mapped.name = object.producto.nombre;
  mapped.maxPrice = object.producto.precioMax;
  mapped.minPrice = object.producto.precioMin;
  mapped.prices = new Array<Price>();
  object.sucursales.forEach((e) => {
    const price = mapPrice(e);
    price && mapped.prices.push(price);
  });
  return mapped;
}

export function mapPrice(object: Sucursale) {
  if (object.preciosProducto) {
    const mapped = new Price();
    mapped.id = `${object.comercioId}-${object.banderaId}`;
    mapped.name = object.banderaDescripcion;
    mapped.price = object.preciosProducto.precioLista
      ? object.preciosProducto.precioLista
      : object.preciosProducto.precio_unitario_con_iva;
    mapped.today = object.actualizadoHoy;
    return mapped;
  }
  return null;
}
