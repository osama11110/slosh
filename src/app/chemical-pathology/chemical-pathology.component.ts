import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-chemical-pathology',
  templateUrl: './chemical-pathology.component.html',
  styleUrls: ['./chemical-pathology.component.css']
})
export class ChemicalPathologyComponent implements OnInit {

  chemicalPackage: Package[] = [];

  constructor(private packageService: PackageService) { }


  ngOnInit(): void {
    this.chemicalPackage = this.packageService.getchemicalItems();
  }
  add(item: Package) {
    this.packageService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }
}
