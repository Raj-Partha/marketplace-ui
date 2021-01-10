import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer';
import { Router } from '@angular/router';
import { OfferService } from '../offer.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {
  public newOffer: Offer =new Offer();
  public createdSuccessfully : boolean;
  public onError : boolean;

  constructor(private router: Router,  private offerService: OfferService, private cookieService : CookieService) { 
    this.createdSuccessfully =false;
  }
  
  ngOnInit() {
    
  }
  
  createOffer(): void {
    this.onError = false;
    this.createdSuccessfully =false;
    this.newOffer.offeredBy = this.cookieService.get("login-id");
    this.offerService.saveOffer(this.newOffer)
        .subscribe( data => {
          this.createdSuccessfully =true;
        },
      error=>{
        this.onError = true;
      });

  };
  reSet(): void {
    this.createdSuccessfully =false;
    this.onError = false;
    this.newOffer = new Offer();
  };


}
