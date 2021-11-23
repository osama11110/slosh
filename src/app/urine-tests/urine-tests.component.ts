import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-urine-tests',
  templateUrl: './urine-tests.component.html',
  styleUrls: ['./urine-tests.component.css']
})
export class UrineTestsComponent implements OnInit {
  urinePackage: Package[] = [];

  constructor(private packageService: PackageService) { }


  ngOnInit(): void {
    this.urinePackage = this.packageService.geturineItems();
  }
  add(item: Package) {
    this.packageService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }
}
