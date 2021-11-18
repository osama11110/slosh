import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-allergens',
  templateUrl: './allergens.component.html',
  styleUrls: ['./allergens.component.css']
})
export class AllergensComponent implements OnInit {

  allergensPackage: Package[] = [];

  constructor(private packageService: PackageService) { }


  ngOnInit(): void {
    this.allergensPackage = this.packageService.getallergenItems();
  }
  add(item: Package) {
    this.packageService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }
}
