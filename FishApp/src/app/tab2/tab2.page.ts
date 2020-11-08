import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

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
