import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ProductResponse } from "../../../shared/models/product-response.model";
import { Product, mapProduct } from "../../../shared/models/product.model";
import { Cart, mapCart } from "../../../shared/models/cart.model";
import { DataSaverService } from "../data-saver/data-saver.service";
import { map } from "rxjs/operators";
import { CartService } from '../cart/cart.service';

@Injectable({
  providedIn: "root",
})
export class CodeReaderService {
  public code: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(null);
  private codeString = "";

  constructor(
    private client: HttpClient,
    private dataSaverService: DataSaverService,
    private cartService: CartService,
  ) {}

  public setCode(code: string): void {
    this.codeString = code;
    this.getData().subscribe((e) => {
      this.dataSaverService.save(new Product(e));
      const cart = new Cart(mapCart(e));
      const savedCart = this.dataSaverService.get(cart) || cart;
      if (savedCart) {
        savedCart.count++;
      }
      this.dataSaverService.save(new Cart(savedCart));
      this.cartService.set(this.dataSaverService.getAll(Cart.name));
      this.code.next(savedCart);
    });
  }

  public getCode(): Observable<Cart> {
    return this.code;
  }

  public press(event) {
    if (event.key === "Tab") {
      this.setCode(this.codeString);
      this.codeString = "";
    } else if (event.key.match(/^[a-z0-9]{1,1}$/i)) {
      this.codeString = this.codeString + event.key;
    }
  }

  public getData(): Observable<Product> {
    return this.client
      .get<any>(
        "https://d3e6htiiul5ek9.cloudfront.net/prod/producto?limit=30&id_producto=" +
          this.codeString +
          "&array_sucursales=15-1-194,10-2-187,12-1-154,15-1-1036,9-3-5214,15-1-137,15-1-116,23-1-6204,10-1-183,10-3-435,15-1-179,12-1-155,15-1-145,15-1-81,12-1-197,9-3-662,15-1-187,10-3-433,15-1-149,15-1-92,9-2-61,15-1-89,9-3-5211,19-1-01142,19-1-03329,19-1-02916,12-1-184,12-1-162,3-1-1291,9-3-138"
      )
      .pipe(map((e) => mapProduct(new ProductResponse(e))));
  }
}
