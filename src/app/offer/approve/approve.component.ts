import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../request/request-service.service';
import { RequestPOJO } from '../../request/request';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

   
  public requests: RequestPOJO[]=[];

  constructor( private requestService : RequestServiceService, private cookieService: CookieService) {
   }

  ngOnInit() {
    this.getAllRequests(this.cookieService.get("login-id"));
  }
  getAllRequests(party:string){

    this.requestService.getAllApprovals(encodeURIComponent(party))
      .subscribe( data => {
        this.requests = data;
      });
  }
  approveRequest(request:RequestPOJO){
    request.status="Approving";
    this.requestService.processPendingApproval(request)
    .subscribe( data => {
      request.status="Approved";
      request = data;
      alert("Request Approved successfully." );
      
    },
    error => {
      request.status = "Insufficient Collateral";
      console.log(error);
      alert("Apprval failed, reason :" + error.error.message);
  }
);
    console.log("------------------ Approved");
  };

}
