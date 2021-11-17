import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;
   items = this.cartService.getcartItems();
   constructor(
    private cartService: PackageService)
   { }

  ngOnInit(): void{
  }

  emptyCart(): void {
  this.cartService.clearCart();
  }

}
