import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {SigninService} from "src/app/services/signin.service"

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private router: Router,public toastController: ToastController,private signin:SigninService) { }

  isLoggedIn
  ionViewDidEnter(){
    this.isLoggedIn = localStorage.getItem("isLoggedIn")
  }
  ngOnInit() {
  	
  }
  
  manageAdress(){
    console.info("manageAdress")
    this.router.navigate(['/manageaddress']);
  }

  myOrders(){
    console.info("myOrders")
    this.router.navigate(['/myorders']);
  }

  favourites(){
    console.info("favourites")
    this.router.navigate(['/favourites']);
  }

  myOffers(){
    console.info("myOffers")
    this.router.navigate(['/myoffers']);
  }

  help(){
    console.info("help")
    this.router.navigate(['/help']);
  }
  
  async logout(){
    localStorage.clear();
    this.presentToast("Logout successfully");
    this.router.navigate(['/tabs/tab1']);
  }

  login(){
    this.signin.redirectToLogin()
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      mode:"md",
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
