import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliveryopts',
  templateUrl: './deliveryopts.page.html',
  styleUrls: ['./deliveryopts.page.scss'],
})
export class DeliveryoptsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  slots = [
  	{
  		time:"Monday 12:30 PM",
  		day:"Monday"
  	},
  	{
  		time:"Tuesday 12:30 PM",
  		day:"Tuesday"
  	},
  	{
  		time:"Wednesday 12:30 PM",
  		day:"Wednesday"
  	},
  	{
  		time:"Thursday 12:30 PM",
  		day:"Thursday"
  	},{
  		time:"Friday 12:30 PM",
  		day:"Friday"
  	},{
  		time:"Saturday 12:30 PM",
  		day:"Saturday"
  	},{
  		time:"Sunday 12:30 PM",
  		day:"Sunday"
  	},
  ]
  continue(){
  	console.info("continue()")
  	this.router.navigate(['/order-status']);
  }
}
