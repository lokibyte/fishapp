import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.page.html',
  styleUrls: ['./myorders.page.scss'],
})
export class MyordersPage implements OnInit {

  constructor() { }

  ngOnInit(){
  	this.load_orders();
  }
  
  myorders = [];
  load_orders(){
    fetch('./assets/myorders.json').then(res => res.json())
    .then(json => {
      this.myorders = json.orders;
      console.log(this.myorders);
    });
  }

	onOrderClick(order){
		console.info("order",order);
	}
}
