import { Component } from '@angular/core';
import {CartServiceService} from "src/app/services/cart-service.service"
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  selected:true
  
  constructor(private cartservice:CartServiceService) {}

  ngOnInit(){

  }
  _cartItemCount=0;
  ionViewDidEnter(){
    this.cartservice.getCartItemCount().subscribe((res)=>{
      console.info("tabs--",res);
      this._cartItemCount = res
    }); 
  }

}
