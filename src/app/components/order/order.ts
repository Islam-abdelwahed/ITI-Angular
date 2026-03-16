import { Component } from '@angular/core';
import { Products } from '../products/products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  imports: [Products,FormsModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {}
