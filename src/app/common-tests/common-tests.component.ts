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
  cartPackage: Package[] = [];
  constructor(private packageService: PackageService) { }


  ngOnInit(): void {
    this.commontestsPackage = this.packageService.getItems();
  }
  addToCart(item: Package)
  {
      this.cartPackage.push(item);
  }

  checkOut()
  {
    this.packageService.setItems(this.cartPackage);
  }

}
