import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myoffers',
  templateUrl: './myoffers.page.html',
  styleUrls: ['./myoffers.page.scss'],
})
export class MyoffersPage implements OnInit {

  constructor() { }

  ngOnInit(){
  	this.load_faqs();
  }
  
  offers = [];
  load_faqs(){
    fetch('./assets/offers.json').then(res => res.json())
    .then(json => {
      this.offers = json.offers;
      console.log(this.offers);
    });
  }

	onHdrClick(offer){
		offer.tnctapped = !offer.tnctapped 
	}

}
