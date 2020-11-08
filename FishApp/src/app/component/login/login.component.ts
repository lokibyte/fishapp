import { Component, OnInit } from '@angular/core';
import { ModalController,ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,public modalController: ModalController,public toastController: ToastController) { }

  otpsent = false
  mobilenumber = ""
  otp = ""
  logoimg = "../../assets/logo.png";
  mobilerequired = "Mobile Number required";
  isValidPhone = true;
  
  ngOnInit() {
  	
  }
  
  ionViewDidEnter(){
    this.logoimg = "../../assets/logo.png";
  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
    if(this.router.url =='/tabs/tab4'){
      this.router.navigate(['/tabs/tab1']);  
    }else{
      this.router.navigate([this.router.url]);  
    }
    
    // console.info("router",this.router.url)
  }
  phoneChange(evt){
  	this.mobilenumber = evt.target.value;

    if (this.isValidPhonenumber(this.mobilenumber)) {  
      this.isValidPhone = false;
      return;  
    }
    this.isValidPhone = true;
    
  }
  
  verifyMobile(){
    if(this.mobilenumber.length == 0){
      this.presentToast("Mobile Number required");
      return;
    }else if(this.mobilenumber.length < 10){
      this.presentToast("Invalid Mobile Number");
      return;
    }
  	this.otpsent = true 
  }

  otpChange(evt){
    this.otp = evt.target.value

  }
  verifyOtp(){
    if(this.otp.length < 6){
      this.presentToast("Invalid OTP");
      return
    }else{
      localStorage.setItem("phone",this.mobilenumber)
      localStorage.setItem("isLoggedIn","true")
      this.dismiss();
    }
  }

  goBack(){
  	this.otpsent = false	
  }

  isValidPhonenumber(mobile){

    if(/^\d{10}$/.test(mobile)){
        return true;
    }else{
       return false;
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
