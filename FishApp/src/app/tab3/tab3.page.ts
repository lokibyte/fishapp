import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,ToastController } from '@ionic/angular';
import {CartServiceService} from "src/app/services/cart-service.service"
import {SigninService} from "src/app/services/signin.service"

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router,public alertController: AlertController,public toastController: ToastController,private cartservice:CartServiceService,private signin:SigninService) {}
  cart = [];
  total_amount = 100;
  ship_charge = 30;
  promo_charge = 10
  promo_code = "OFF50"
  itemcount = 0
  ngOnInit(){
    
  }

  ionViewWillEnter(){
    console.info("ionViewWillEnter:tab2")
  }
  async ionViewDidEnter(){
  	this.cart = await this.cartservice.getCart()
    console.info("ionViewDidEnter:tab2",this.cart)
    this._isEmptyCart();
  }

  increment(item){
    this.cartservice.addCart(item)
    let _itemcount = this.cartservice.getCartItemCount()
    this.itemcount = _itemcount.value
    console.info(this.cartservice.getCart())
  }
  decrement(item){
    this.cartservice.removeCart(item)
    this._isEmptyCart();
  }
  _isEmptyCart(){
    let _itemcount = this.cartservice.getCartItemCount()
    this.itemcount = _itemcount.value
    if(_itemcount.value==0){
      this.presentToast("Your cart is empty!!")
      this.router.navigate(['/tabs/tab1']);
    }
  }
  placeOrder(){
    if(this.signin.isLoggedIn()){
      this.router.navigate(['/deliveryopts']);
    }else{
      console.info("please login")
      this.signin.redirectToLogin()
    }
    
  }

  async couponAlert() {
    console.info("couponAlert()");
    const alert = await this.alertController.create({
      cssClass: 'alert-coupon-class',
      header: 'Enter Coupon',
      backdropDismiss:false,
      inputs: [
        {
          name: 'coupon',
          type: 'text',
          placeholder: 'Enter Coupon Code'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Apply',
          handler: (data) => {
            if(data.coupon.length ==0){
              this.presentToast("Enter valid coupon code!!")
            }
            console.info('coupone code',data.coupon);

          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      mode:"md",
      message: msg,
      duration: 2000,
      position:'middle'
    });
    toast.present();
  }
}
