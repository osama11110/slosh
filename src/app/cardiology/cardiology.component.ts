import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-cardiology',
  templateUrl: './cardiology.component.html',
  styleUrls: ['./cardiology.component.css']
})
export class CardiologyComponent implements OnInit {

  cardiologyPackage: Package[] = [];

  constructor(private packageService: PackageService) { }


  ngOnInit(): void {
    this.cardiologyPackage = this.packageService.getcardiologyItems();
  }
  add(item: Package) {
    this.packageService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }
}
