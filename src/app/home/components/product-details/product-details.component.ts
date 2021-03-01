import { Component, Input, OnInit } from "@angular/core";
import { Cart } from "../../../shared/models/cart.model";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  @Input() public selected: Cart;

  constructor() {}

  ngOnInit(): void {}
}
