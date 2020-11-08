import { Component } from '@angular/core';
import {CartServiceService} from "src/app/services/cart-service.service"
import {LoaderService} from 'src/app/shared/loader.service'
import {ProductService} from 'src/app/services/product.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showsearchbar = false
  fishes = []
  categories = []
  items = [];
  numbers = []
  constructor(private cartservice:CartServiceService,
    public loader:LoaderService,
    private productService:ProductService
    ) {
    this.numbers = Array(5).fill(0).map((x,i)=>i);
  }
  async ngOnInit(){
    console.info("ngOnInit");
    await this._getCategories();
    await this._getFishes();
  }
  
  _getFishes(){
    // this.loader.showLoader();
    const reqObj = {};
    this.productService.getProducts(reqObj).subscribe( (data) => {
       // this.loader.hideLoader();
       this.items = data.data;
       this.fishes = data.data;
       console.info("response",data);
     }
     ,(err) => {
        // this.loader.hideLoader();
       console.log("GET call in error", err);
     }
     ,() => {
       // this.loader.hideLoader();
       console.log("The Get observable is now completed.");
     }
    );
  }
  _getCategories(){
    // this.loader.showLoader();
    const reqObj = {};
    this.productService.getCategories(reqObj).subscribe( (data) => {
       // this.loader.hideLoader();
       this.categories = data.data;
        const all = {
          count: 0,
          description: "",
          display: "default",
          id: 100,
          image: null,
          menu_order: 0,
          name: "All",
          parent: 0,
          slug: "all"
        };
      this.categories.unshift(all);
       // console.info("response",data);
     }
     ,(err) => {
        // this.loader.hideLoader();
       console.log("GET call in error", err);
     }
     ,() => {
        // this.loader.hideLoader();
       console.log("The Get observable is now completed.");
     }
    );
  }
  ionViewDidEnter(){
    this.fishes = this.items
    console.info(this.cartservice.getCart())
    let cart = this.cartservice.getCart()
    if(cart.length == 0){
      console.info("empty")
      this.fishes = this.items.map(item =>{
        console.info(item.hasOwnProperty("o_count"));
        if(item.hasOwnProperty("o_count")){
          item["o_count"] = 0 
        }
        return item
      })
    }else{
      console.info("some data");
    }
  }

  loggedin = true
 
  imgHeight=100;
  showSearch(){
  	this.showsearchbar = true
  }
  searchFocusOut(){
  	this.showsearchbar = false	
  }

  selectedFltr = 0; //default first filter item selected

  onFilter(category,idx){
    this.selectedFltr = idx;
    this._filterlist(category.slug)
  }
  filterList(evt){
    this._filterlist(evt.target.value)
  }
  _filterlist(txt){
    console.info(txt)
     this.fishes = this.items;

    if (!txt) {
      return;
    }

    this.fishes = this.items.filter(fish => {
      if(txt=='all'){
        return fish;
      }else if (fish.name && txt) {
        return (fish.name.toLowerCase().indexOf(txt.toLowerCase()) > -1 || fish.categories[0].slug.toLowerCase().indexOf(txt.toLowerCase()) > -1);
      }
    });
  }
  
  increment(item){
    this.cartservice.addCart(item)
  }
  
  decrement(item){
    this.cartservice.removeCart(item)
  }
}
