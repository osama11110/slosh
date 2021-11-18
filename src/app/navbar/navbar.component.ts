import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   items = this.cartService.getcartItems();
   constructor(
  private cartService: PackageService, private router: Router
)
   { }

  ngOnInit(): void{
    // this.cart = this.cartService.clearCart();
  }

  emptyCart(){
  this.cartService.clearCart();
  let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });

  }


}
