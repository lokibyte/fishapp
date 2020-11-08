import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }

  cart = [];
  
  private cartItemCount = new BehaviorSubject(0);
  
  getCartItemCount() {
    return this.cartItemCount;
  }

  addCart(item){
    //get the item from cart & increment the o_count else add to cart with o_count to 1

    this.cartItemCount.next(this.cartItemCount.value + 1);

    if(this.cart.length == 0){
      item.o_count = 1;
      this.cart.push(item)
    }else{
      let _item = this.cart.find(x => x.id == item.id)
      if(!_item){
        item.o_count = 1;
        this.cart.push(item)
        return
      }
      item.o_count += 1;
      console.info("_item",_item)
    }
  	
  }

  removeCart(item){
    //get the item from cart & increment the o_count else add to cart with o_count to 1
  	  
      this.cartItemCount.next(this.cartItemCount.value - 1);
      let _idx = this.cart.findIndex(x => x.id == item.id)
      let _item = this.cart[_idx]
      if(_item){
        _item.o_count -= 1;
        if(_item.o_count <= 0){
          this.cart.splice(_idx,1)
        }
      }
  }

  emptyCart(){
    this.cartItemCount = new BehaviorSubject(0);
  	this.cart = [];
  }

  getCart(){
    return this.cart
  }
}
