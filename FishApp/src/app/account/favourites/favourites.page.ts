import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

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

	onReOrder(order){
		console.info("eOrder",order);
	}


}
