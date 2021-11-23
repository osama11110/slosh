import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-haemo-tests',
  templateUrl: './haemo-tests.component.html',
  styleUrls: ['./haemo-tests.component.css']
})
export class HaemoTestsComponent implements OnInit {
  haemoPackage: Package[] = [];

  constructor(private packageService: PackageService) { }


  ngOnInit(): void {
    this.haemoPackage = this.packageService.gethaemoItems();
  }
  add(item: Package) {
    this.packageService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }
}
