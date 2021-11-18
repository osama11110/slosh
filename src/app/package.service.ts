import { Injectable } from "@angular/core";
import { Package } from "./package.model";
import { Router } from '@angular/router';

@Injectable()

export class PackageService
{
    cartPackage: Package[] = [];
  //     private packageItem: any = [{
  //     commonTests:[{
  //     packageId: 1,
  //     packageName: 'Glucose(plasma) Test',
  //     packagePrice: 500,
  //     packageDesc:'A fasting plasma glucose test or fasting glucose test (FGT), is a test that can be used to help diagnose diabetes or pre-diabetes.'
  //   },
  //   {
  //     packageId: 2,
  //     packageName: 'Complete blood Picture',
  //     packagePrice: 600,
  //     packageDesc:'CBP is a blood test used to evaluate your overall health and detect a wide range of disorders.'
  //   }
  // ],
  //     allergens:[{
  //     packageId: 1,
  //     packageName: 'Glucose(plasma) Test',
  //     packagePrice: 500,
  //     packageDesc:'A fasting plasma glucose test or fasting glucose test (FGT), is a test that can be used to help diagnose diabetes or pre-diabetes.'
  //   },
  //   {
  //     packageId: 2,
  //     packageName: 'Complete blood Picture',
  //     packagePrice: 600,
  //     packageDesc:'CBP is a blood test used to evaluate your overall health and detect a wide range of disorders.'
  //   }
  // ]
  // }];

  private packageItem: Package[]= [{
  packageId: 1,
  packageName: 'Glucose(plasma) Test',
  packagePrice: 500,
  packageDesc:'A fasting plasma glucose test or fasting glucose test (FGT), is a test that can be used to help diagnose diabetes or pre-diabetes.'
}];


    public count = 0;
    private cartItem: Package[] = [];

    constructor(private router: Router){}

    getItems()
    {
      return this.packageItem;
    }
    getcartItems()
    {
      return this.cartItem;
    }
    setItems(item: Package[])
    {
      this.cartItem = item;
    }
    clearCart() {
    this.cartItem = [];
    this.count=0;

  }
  addToCart(item: Package)
  {
      this.cartItem.push(item);
      this.count = this.count+1;
      return this.count;
  }
  checkOut()
  {
    this.setItems(this.cartPackage);
  }
}
