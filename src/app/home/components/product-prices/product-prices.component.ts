import { Component, Input, OnInit } from "@angular/core";
import { Price } from "../../../shared/models/product.model";

@Component({
  selector: "app-product-prices",
  templateUrl: "./product-prices.component.html",
  styleUrls: ["./product-prices.component.scss"],
})
export class ProductPricesComponent implements OnInit {
  @Input() prices: Array<Price>;

  constructor() {}

  ngOnInit(): void {}
}
