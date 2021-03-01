export class Producto {
  precio_unitario_bulto_min_sin_iva?: any;
  precio_bulto_min_con_iva?: any;
  precio_unitario_bulto_max_sin_iva?: any;
  marca: string;
  precio_bulto_max_sin_iva?: any;
  id: string;
  precio_bulto_min_sin_iva?: any;
  precioMax: number;
  precio_unitario_bulto_max_con_iva?: any;
  precioMin: number;
  nombre: string;
  precio_unitario_bulto_min_con_iva?: any;
  precio_bulto_max_con_iva?: any;
  presentacion: string;
  cantSucursalesDisponible: number;
}

export class Promo1 {
  descripcion: string;
  precio_unitario_sin_iva: string;
  precio_unitario_con_iva: string;
  precio: string;
}

export class Promo2 {
  descripcion: string;
  precio_unitario_sin_iva: string;
  precio_unitario_con_iva: string;
  precio: any;
}

export class PreciosProducto {
  promo1: Promo1;
  precio_unitario_con_iva: number;
  precioLista: number;
  precio_unitario_sin_iva: number;
  promo2: Promo2;
  precio_bulto_sin_iva: number;
  precio_bulto_con_iva: number;
}

export class Sucursale {
  message: string;
  comercioId: any;
  id: string;
  banderaId: any;
  unidad_venta: string;
  lat: string;
  lng: string;
  sucursalNombre: string;
  sucursalTipo: string;
  provincia: string;
  preciosProducto: PreciosProducto;
  actualizadoHoy?: boolean;
  direccion: string;
  banderaDescripcion: string;
  localidad: string;
  comercioRazonSocial: string;
}

export class ProductResponse {
  status: number;
  totalPagina: number;
  producto: Producto;
  maxLimitPermitido: number;
  sucursalesConProducto: number;
  total: number;
  sucursales: Sucursale[];

  constructor(object?: ProductResponse) {
    this.status = null;
    this.totalPagina = null;
    this.producto = null;
    this.maxLimitPermitido = null;
    this.sucursalesConProducto = null;
    this.total = null;
    this.sucursales = null;

    if (object) {
      Object.assign(this, object);
    }
  }
}
