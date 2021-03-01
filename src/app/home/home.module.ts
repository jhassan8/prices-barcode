import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";
import { InputNumberModule } from "primeng/inputnumber";
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductPricesComponent } from './components/product-prices/product-prices.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';

@NgModule({
  declarations: [HomeComponent, ProductDetailsComponent, ProductPricesComponent, ProductCartComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, InputNumberModule],
})
export class HomeModule {}
