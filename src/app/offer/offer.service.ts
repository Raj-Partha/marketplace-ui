import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from './offer';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getAllOffers(): Observable<Offer[]>  {
    return this.http.get<Offer[]>(environment.marketPlaceRESTEndPoint +'offer/list');
  }

  saveOffer(request: Offer) {
    return this.http.put<Offer>(environment.marketPlaceRESTEndPoint +'offer/add-request',request);
  }
  getEligibleParties(noOfStocks, symbol):Observable<string []>{
    let Params = new HttpParams()
    .set('symbol', symbol).set('noOfStocks', noOfStocks)
    .set('loginId', this.cookieService.get('login-id'))
    
    return this.http.get<string []>(environment.marketPlaceRESTEndPoint +'offer/eligible-parties',{params:Params});
  }
}
