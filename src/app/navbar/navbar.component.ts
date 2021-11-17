import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   items = this.cartService.getcartItems();
   constructor(
    private cartService: PackageService)
   { }

  ngOnInit(): void{
    // this.cart = this.cartService.clearCart();
  }

  emptyCart(){
  this.cartService.clearCart();
  }

}
