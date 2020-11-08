import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from 'src/app/component/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(public modalController: ModalController) { }

  login(mobile:string,){
  	if(mobile){
  		return true
  	}else{
  		return false
  	}
  	
  }

  verifyOtp(otp:string){
  	if(otp){
  		return true
  	}else{
  		return false
  	}
  }

  isLoggedIn(){
  	return localStorage.getItem("isLoggedIn")
  }

  redirectToLogin(){
  	this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
