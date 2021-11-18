import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";



@Component({
  selector: 'app-common-tests',
  templateUrl: './common-tests.component.html',
  styleUrls: ['./common-tests.component.css']

})
export class CommonTestsComponent implements OnInit {
  commontestsPackage: Package[] = [];

  constructor(private packageService: PackageService) { }


  ngOnInit(): void {
    this.commontestsPackage = this.packageService.getcommonItems();
  }
  add(item: Package) {
    this.packageService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }


}
