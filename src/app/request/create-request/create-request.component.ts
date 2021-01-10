import { Component, OnInit } from '@angular/core';
import { RequestPOJO } from '../request';
import { Router } from '@angular/router';
import { RequestServiceService } from '../request-service.service';
import { OfferService } from '../../offer/offer.service';
import { Offer } from '../../offer/offer';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {

  request: RequestPOJO = new RequestPOJO();
  public createdSuccessfully: boolean;
  public onError: boolean;
  public matchingFailed: boolean;
  public matchingSuccess: boolean;
  public optionSelected : any;
  constructor(private router: Router, private requestService: RequestServiceService,
    private offerService: OfferService, private cookieService: CookieService) {
    this.createdSuccessfully = false;
    this.onError = false;
    this.matchingFailed = false;
    this.matchingFailed = false;
  }


  private options: any[] = [];


  ngOnInit() {

  }

  reSet() {
    this.createdSuccessfully = false;
    this.onError = false;
    this.matchingFailed = false;
    this.matchingFailed = false;
    this.request = new RequestPOJO();
  }

  createRequest(): void {
    console.log("Option selected  " + this.optionSelected)
    this.request.selectedLender = this.optionSelected;
    this.request.requestedBy = this.cookieService.get("login-id");
    this.request.status = "Created";
    this.requestService.saveRequest(this.request)
      .subscribe(data => {
        this.createdSuccessfully = true;
      }, error => {
        this.onError = true;
      });

  };
  
  getEligigleParties(noOfStocks, symbol) {
    var offers: any[] = [];
    this.offerService.getEligibleParties(noOfStocks, symbol)
      .subscribe(data => {
        this.options = data;
        console.log(data)
        if (this.options.length > 0) {
          this.matchingFailed = false;
          this.matchingSuccess = true;
          this.optionSelected = this.options[0];
        } else {
          this.matchingFailed = true;
          this.matchingSuccess = false;
        }

      }, error => {
        this.matchingSuccess = false;
        this.matchingFailed = true;
      });

  };


  public onOptionsSelected(event) {
    console.log(event); //option value will be sent as event

    this.request.selectedLender = event;

  }


}
