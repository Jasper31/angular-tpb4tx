import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product!: Product; //indicates that the property value passes in from the component's parent (ProductListComponent) //pass data to child component
  @Output() notify = new EventEmitter(); //allows ProductAlertComponent to emit and event when the value of notify property changes
}
