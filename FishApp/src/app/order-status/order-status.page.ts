import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CartServiceService} from "src/app/services/cart-service.service"

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.page.html',
  styleUrls: ['./order-status.page.scss'],
})
export class OrderStatusPage implements OnInit {

  constructor(private router: Router,private cartservice:CartServiceService) { }

  ngOnInit() {
  }
  emptyCart(){
  	this.cartservice.emptyCart();
  }
  backToHome(){
  	this.emptyCart();
  	this.router.navigate(['/tabs/tab1']);
  }
}
