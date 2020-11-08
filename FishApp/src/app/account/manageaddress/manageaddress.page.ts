import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageaddress',
  templateUrl: './manageaddress.page.html',
  styleUrls: ['./manageaddress.page.scss'],
})
export class ManageaddressPage implements OnInit {

  constructor() { }

   ngOnInit(){
  	this.load_address();
  }
  
  address = [];
  load_address(){
    fetch('./assets/address.json').then(res => res.json())
    .then(json => {
      this.address = json.address.map(adr =>{
		if(adr.name=="home"){
			adr.icon = "home-outline";
		}else if(adr.name=="work"){
			adr.icon = "briefcase-outline";
		}else{
			adr.icon = "location-outline";
		}
		return adr;
      });
      
      console.log(this.address);
    });
  }

  onEditAddress(adrs){
  	console.info("onEditAddress",adrs);
  }

  onDeleteAddres(adrs){
  	console.info("onDeleteAddres",adrs);
  }

  onAddNewAddress(){
  	console.info("onAddNewAddress()");

  }

}
