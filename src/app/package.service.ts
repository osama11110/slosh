import { Injectable } from "@angular/core";
import { Package } from "./package.model";

@Injectable()

export class PackageService
{
    private packageItem: Package[] = [{
      packageId: 1,
      packageName: 'Glucose(plasma) Test',
      packagePrice: 500
    }];

    private cartItem: Package[] = [];

    constructor(){}

    getItems()
    {
      return this.packageItem;
    }
    setItems(item: Package[])
    {
      this.cartItem = item;
    }
}
