import { Component, OnInit } from "@angular/core";
import { CartService } from "../core/services/cart/cart.service";
import { CodeReaderService } from "../core/services/code-reader/code-reader.service";
import { Cart } from "../shared/models/cart.model";
import { Product } from "../shared/models/product.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public selected: Cart;
  public cart: Array<Cart>;

  constructor(
    private codeReaderService: CodeReaderService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.codeReaderService.getCode().subscribe((e) => (this.selected = e));
    this.cartService.get().subscribe((e) => {
      this.cart = e;
      this.selected = this.selected
        ? this.selected
        : e.length > 0
        ? e[0]
        : null;
    });
  }

  public change(object: Cart): void {
    this.selected = object;
  }
}
