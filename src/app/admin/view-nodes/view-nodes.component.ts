import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { GridOptions } from "ag-grid";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-nodes',
  templateUrl: './view-nodes.component.html',
  styleUrls: ['./view-nodes.component.css']
})
export class ViewNodesComponent implements OnInit {
  private gridOptions = <GridOptions>{
    enableFilter: true,
    enableColResize: true,
    enableSorting: true,
    pagination: true,
    paginationPageSize:25,
    animateRows: true,
    gridAutoHeight :true,
    enableStatusBar: true,
    defaultColDef: {
      enableValue: true
    }
  };

  constructor(private adminService: AdminService, private http: HttpClient) { 
    this.gridOptions.columnDefs  = [
      {
        headerName: "Id",
        field: "id"
      },
      {
        headerName: "ShortName",
        field: "shortName"
      },
      {
        headerName: "CordaName",
        field: "cordaName"
      },
      {
        headerName: "REST End Point",
        field: "restEndPoint"
      },
      {
        headerName: "Roles",
        field: "roles"
      }
    ];
  
  }

  ngOnInit() {
    this.adminService.getAllNodes()
      .subscribe(data => {
        this.gridOptions.api.setRowData(data);
      });
  }
 
}
