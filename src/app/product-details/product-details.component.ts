import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  addToClick(product){
    window.alert('your product has been added to the cart');
    this.cartService.addToCart(product);
  }
 
  constructor(
    private route: ActivatedRoute ,
    private cartService : CartService
    ) { }

  ngOnInit() {
    // url로 부터 값을 가져오게 하는것 params가 
    this.route.paramMap.subscribe(params =>{
      this.product = products[+params.get('productId')];
    });
  }

}