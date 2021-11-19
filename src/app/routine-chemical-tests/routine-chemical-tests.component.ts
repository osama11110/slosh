import { Component, OnInit } from '@angular/core';
import { PackageService } from "../package.service";
import { Package } from "../package.model";

@Component({
  selector: 'app-routine-chemical-tests',
  templateUrl: './routine-chemical-tests.component.html',
  styleUrls: ['./routine-chemical-tests.component.css']
})
export class RoutineChemicalTestsComponent implements OnInit {
  routinePackage: Package[] = [];

  constructor(private packageService: PackageService) { }


  ngOnInit(): void {
    this.routinePackage = this.packageService.getroutineItems();
  }
  add(item: Package) {
    this.packageService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }
}
