import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-haematology',
  templateUrl: './haematology.component.html',
  styleUrls: ['./haematology.component.css']
})
export class HaematologyComponent implements OnInit {

  haematologyPackage: Package[] = [];

  constructor(private packageService: PackageService) { }


  ngOnInit(): void {
    this.haematologyPackage = this.packageService.gethaematologyItems();
  }
  add(item: Package) {
    this.packageService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }
}
