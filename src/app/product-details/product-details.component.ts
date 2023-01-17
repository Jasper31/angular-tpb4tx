import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {} // spcific to each component that Angular Router Loads.
  // contains information about the route and the route's parameters -> configuring the component to use a service
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap; // route.snapshot (ActivatedRouteSnapshot) contains information about the active route at that particular moment in time. URL that matches the route provides the productId.
    const productIdFromRoute = Number(routeParams.get('productId')); // correspond to the path variables you define in the route

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
