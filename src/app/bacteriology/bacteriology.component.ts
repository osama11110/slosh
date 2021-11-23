import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-bacteriology',
  templateUrl: './bacteriology.component.html',
  styleUrls: ['./bacteriology.component.css']
})
export class BacteriologyComponent implements OnInit {

    bactPackage: Package[] = [];

    constructor(private packageService: PackageService) { }


    ngOnInit(): void {
      this.bactPackage = this.packageService.getbactItems();
    }
    add(item: Package) {
      this.packageService.addToCart(item);
      window.alert('Your product has been added to the cart!');
    }
}
