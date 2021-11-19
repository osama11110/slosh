import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-virology',
  templateUrl: './virology.component.html',
  styleUrls: ['./virology.component.css']
})
export class VirologyComponent implements OnInit {
  virologyPackage: Package[] = [];

  constructor(private packageService: PackageService) { }


  ngOnInit(): void {
    this.virologyPackage = this.packageService.getvirologyItems();
  }
  add(item: Package) {
    this.packageService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }

}
