
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of,throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Network } from '@ionic-native/network/ngx';
import { environment, BASE_URL } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  status = 'ONLINE';
  isConnected = true;

  constructor(
  	private http: HttpClient,
  	private network: Network
  ) { 
  	let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
		this.status = 'OFFLINE';
		this.isConnected = false;

    });

    // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      	this.status = 'ONLINE';
  		this.isConnected = true;
    });

  }
  	httpGet(url): Observable<any> {
  		const _url = BASE_URL + url;
		if(!this.isConnected){
			return throwError({status:this.status,msg:'The internet connection appears to be offline.Try again'});
		}
		return this.http.get(_url);
	}

	httpPost(url,reqObj, _httpOptions):Observable<any> {
		const _url = BASE_URL + url;
	
		//fake post url
		// const url = "https://reqres.in/api/users";
		// reqObj = {
	 //        name: "paul rudd",
	 //        movies: ["I Love You Man", "Role Models"]
	 //    };

		const httpOptions = {
		    headers: new HttpHeaders(_httpOptions)
		 };
		if(!this.isConnected){
			return throwError({status:this.status,msg:'The internet connection appears to be offline.Try again'});
		}
		return this.http.post(_url,reqObj, httpOptions);
	}

}
