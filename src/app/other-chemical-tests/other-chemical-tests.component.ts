import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-other-chemical-tests',
  templateUrl: './other-chemical-tests.component.html',
  styleUrls: ['./other-chemical-tests.component.css']
})
export class OtherChemicalTestsComponent implements OnInit {
  otherPackage: Package[] = [];

  constructor(private packageService: PackageService) { }


  ngOnInit(): void {
    this.otherPackage = this.packageService.getotherItems();
  }
  add(item: Package) {
    this.packageService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }
}
