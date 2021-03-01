import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Cart } from "../../../shared/models/cart.model";

@Component({
  selector: "app-product-cart",
  templateUrl: "./product-cart.component.html",
  styleUrls: ["./product-cart.component.scss"],
})
export class ProductCartComponent implements OnInit {
  @Input() public cart: Array<Cart>;
  @Output() private select = new EventEmitter<Cart>();

  constructor() {}

  ngOnInit(): void {}

  public change(selected: Cart): void {
    this.select.emit(selected);
  }
}
