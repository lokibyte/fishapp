import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.load_faqs();
  }
  faqs = [];
  load_faqs(){
    fetch('./assets/faqs.json').then(res => res.json())
    .then(json => {
      this.faqs = json.faq;
      console.log(this.faqs);
    });
  }
  
  onHdrClick(faq){
    faq.tapped = !faq.tapped
    
  }

}
