import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../request/request-service.service';
import { CookieService } from 'ngx-cookie-service';
import { RequestPOJO } from '../../request/request';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  private gridOptions = <GridOptions>{
    enableFilter: true,
    enableColResize: true,
    enableSorting: true,
    pagination: true,
    paginationPageSize: 25,
    animateRows: true,
    gridAutoHeight:true,
    enableStatusBar: true,
    defaultColDef: {
      enableValue: true
    }
  };
  constructor(private requestService : RequestServiceService, private cookieService: CookieService ) {
    this.gridOptions.columnDefs  = [
      {
        headerName: "Id",
        field: "requestId"
      },
      {
        headerName: "Symbol",
        field: "symbol"
      },
      {
        headerName: "# Stocks",
        field: "noOfStocks"
      },
      {
        headerName: "Submitted Time",
        field: "createDateTime"
      },
      {
        headerName: "Requester",
        field: "requestedBy"
      },
      {
        headerName: "Selected Lender",
        field: "selectedLender"
      },
      {
        headerName: "status",
        field: "status"
      },
      {
        headerName: "Transaction ID",
        field: "transactionId"
      }
    ];
   }
  ngOnInit() {
    this.getCompltedTransactions(this.cookieService.get("login-id"));
  }
  
  
  public getCompltedTransactions(party:string){

    this.requestService.getCompletedTranactions(encodeURIComponent(party))
      .subscribe( data => {
        this.gridOptions.api.setRowData(data);
      });
  }
 

}
