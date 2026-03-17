import { Component } from '@angular/core';
import { Products } from '../products/products';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';

@Component({
  selector: 'app-order',
  imports: [Products, FormsModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {

  selectedCategoryId: number = 0;
  totalPrice: number = 0;
  categories: ICategory[];
  constructor() {
    this.categories = [
      {
        id: 1,
        name: "Electronics"
      },
      {
        id: 2,
        name: "Clothing"
      },
      {
        id: 3,
        name: "Stationery"
      }
    ];
  }

  onTotalPriceChanged(price: number) {
    this.totalPrice = price;
  }
}
