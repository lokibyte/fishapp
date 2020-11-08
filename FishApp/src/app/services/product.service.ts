import { Injectable } from '@angular/core';
import { Observable, of,throwError } from 'rxjs';
import {NetworkService} from 'src/app/shared/network.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api:NetworkService) { }

  public getProducts(reqObj):Observable<any>{
  	const httpOptions = {
	    'Content-Type': 'application/json',
	    "custom-Token":"someCuStOmToken@#!@#Value"
	};
	
	return this.api.httpGet("/products");
  }

  public getCategories(reqObj):Observable<any>{
  	const httpOptions = {
	    'Content-Type': 'application/json',
	    "custom-Token":"someCuStOmToken@#!@#Value"
	};
	
	return this.api.httpGet("/categories");
  }
}
