import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-sexual-health',
  templateUrl: './sexual-health.component.html',
  styleUrls: ['./sexual-health.component.css']
})
export class SexualHealthComponent implements OnInit {
  sexualPackage: Package[] = [];

  constructor(private packageService: PackageService) { }


  ngOnInit(): void {
    this.sexualPackage = this.packageService.getsexualItems();
  }
  add(item: Package) {
    this.packageService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }

}
