import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../request/request-service.service';
import { CookieService } from 'ngx-cookie-service';
import { RequestPOJO } from '../../request/request';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {


  constructor(private requestService : RequestServiceService, private cookieService: CookieService ) { }
  private transactions : RequestPOJO [] = [];
  ngOnInit() {
    this.getCompltedTransactions(this.cookieService.get("login-id"));
  }
  
  
  public getCompltedTransactions(party:string){

    this.requestService.getCompletedTranactionsByRequester(encodeURIComponent(party))
      .subscribe( data => {
        this.transactions = data;
      });
  }

  approveRequest(request:RequestPOJO){
  
    request.status="Closing";
    this.requestService.closingContract(request)
    .subscribe( data => {
      request = data;
      alert("Contract Closed successfully.");
      
    });
    console.log("------------------ Approved");
      
   
  };
 
}
