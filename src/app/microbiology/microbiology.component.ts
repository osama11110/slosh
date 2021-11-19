import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-microbiology',
  templateUrl: './microbiology.component.html',
  styleUrls: ['./microbiology.component.css']
})
export class MicrobiologyComponent implements OnInit {
  microbiologyPackage: Package[] = [];

  constructor(private packageService: PackageService) { }


  ngOnInit(): void {
    this.microbiologyPackage = this.packageService.getmicrobiologyItems();
  }
  add(item: Package) {
    this.packageService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }
}
