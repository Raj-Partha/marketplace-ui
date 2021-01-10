import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestListComponent } from './request-list/request-list.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { RequestServiceService } from './request-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestViewComponent } from './request-view/request-view.component';
import {SelectModule} from "ng2-select";
import { TransactionComponent } from './transaction/transaction.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    RequestRoutingModule,
    FormsModule,
    SelectModule,
    AgGridModule.withComponents([])
  ],
  providers:[RequestServiceService],
  declarations: [RequestListComponent, CreateRequestComponent, RequestViewComponent, TransactionComponent]
})
export class RequestModule { }
