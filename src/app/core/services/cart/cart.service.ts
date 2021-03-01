import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Cart } from "../../../shared/models/cart.model";
import { DataSaverService } from "../data-saver/data-saver.service";

@Injectable({
  providedIn: "root",
})
export class CartService {
  public cart: BehaviorSubject<Array<Cart>> = new BehaviorSubject<Array<Cart>>(
    null
  );

  constructor(private dataSaverService: DataSaverService) {
    this.set(this.dataSaverService.getAll(Cart.name));
  }

  set(cart: Array<Cart>): void {
    this.cart.next(cart);
  }

  get(): Observable<Array<Cart>> {
    return this.cart;
  }
}
