import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferViewComponent } from './offer-view/offer-view.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { FormsModule } from '@angular/forms';
import { ApproveComponent } from './approve/approve.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    OfferRoutingModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],


  declarations: [OfferViewComponent, OfferListComponent, CreateOfferComponent, ApproveComponent, TransactionComponent]
})
export class OfferModule { }
