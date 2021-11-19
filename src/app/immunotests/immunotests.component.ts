import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-immunotests',
  templateUrl: './immunotests.component.html',
  styleUrls: ['./immunotests.component.css']
})
export class ImmunotestsComponent implements OnInit {
  immunoPackage: Package[] = [];

  constructor(private packageService: PackageService) { }


  ngOnInit(): void {
    this.immunoPackage = this.packageService.getimmunoItems();
  }
  add(item: Package) {
    this.packageService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }
}
