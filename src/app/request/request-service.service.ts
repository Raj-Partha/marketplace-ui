import { Injectable } from '@angular/core';

import { Http, Response } from "@angular/http";
import { RequestPOJO } from 'request';
import { Observable } from "rxjs";
import { HttpClientModule, HttpParams } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {
  private httpOptions = {
    headers: new HttpHeaders({
     'who-am-i': this.cookieService.get("login-id")
    }),
    withCredentials: true
   };
   


  constructor(private http: HttpClient, private cookieService : CookieService) { }

  getAllRequests(): Observable<RequestPOJO[]> {
    return this.http.get<RequestPOJO[]>(environment.marketPlaceRESTEndPoint + 'request/list');
  }

  saveRequest(request: RequestPOJO) {
    console.log("saving oject ", request)
    return this.http.put<RequestPOJO>(environment.marketPlaceRESTEndPoint + 'request/add-request', request);
  }


  processPendingApproval(request: RequestPOJO) {
    const Params = new HttpParams()
      .set('loginId', this.cookieService.get("login-id"));
    console.log("saving oject ", request)
    return this.http.put<RequestPOJO>(environment.marketPlaceRESTEndPoint + 'request/approve-request', request,{params:Params});
  }

  
  closingContract(request: RequestPOJO) {
    const Params = new HttpParams()
      .set('loginId', this.cookieService.get("login-id"));
    console.log("saving oject ", request)
    return this.http.put<RequestPOJO>(environment.marketPlaceRESTEndPoint + 'request/close-contract', request,{params:Params});
  }

  getAllApprovals(party: string) {
    const params = new HttpParams()
      .set('party', party);
    return this.http.get<RequestPOJO>(environment.marketPlaceRESTEndPoint + 'request/pending-approvals', {params});
  }


  getCompletedTranactions(party: string) {
    const params = new HttpParams()
      .set('party', party)
      .set('loginId', this.cookieService.get("login-id"));
    return this.http.get<RequestPOJO>(environment.marketPlaceRESTEndPoint + 'request/completed-tranactions', {params});
  }

  getCompletedTranactionsByRequester(party: string) {
    const params = new HttpParams()
      .set('party', party);
    return this.http.get<RequestPOJO>(environment.marketPlaceRESTEndPoint + 'request/completed-requested-transactions', {params});
  }

}
