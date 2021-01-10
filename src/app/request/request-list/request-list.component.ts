import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../request-service.service';
import { RequestPOJO } from '../request';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  
  private requests: RequestPOJO[]=[];
  private gridOptions = <GridOptions>{
    enableFilter: true,
    enableColResize: true,
    enableSorting: true,
    pagination: true,
    paginationPageSize: 25,
    animateRows: true,
    gridAutoHeight:true,
    enableStatusBar: true,
    enableColumnResize : true,
    sizeColumnsToFit:true,
    defaultColDef: {
      enableValue: true
    }
  };

  constructor( private requestService : RequestServiceService) {
    this.gridOptions.columnDefs  = [
      {
        headerName: "Id",
        field: "requestId",
        sort :'desc'
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
      }
    ];
   }
  
  ngOnInit() {
    this.requestService.getAllRequests()
      .subscribe(data => {
        this.gridOptions.api.setRowData(data);
      });
  }

  getAllRequests(){

    this.requestService.getAllRequests()
      .subscribe( data => {
        this.requests = data;
      });
  }

}
