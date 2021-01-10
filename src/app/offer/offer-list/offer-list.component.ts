import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer';
import { OfferService } from '../offer.service';
import { GridOptions } from 'ag-grid';
@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

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

  constructor(private offerService: OfferService) {
    this.gridOptions.columnDefs  = [
      {
        headerName: "Id",
        field: "offerId",
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
        headerName: "Party Name",
        field: "offeredBy"
      }
    ];
  }

  ngOnInit() {
    this.offerService.getAllOffers()
      .subscribe(data => {
        this.gridOptions.api.setRowData(data);
      });
  }
}
