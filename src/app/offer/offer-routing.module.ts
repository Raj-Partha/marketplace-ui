import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferListComponent } from './offer-list/offer-list.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { ApproveComponent } from './approve/approve.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: 'offer/list', component: OfferListComponent },
  { path: 'offer/create', component: CreateOfferComponent },
  { path: 'offer/pendingapprovals', component: ApproveComponent },
  { path: 'offer/transactions', component: TransactionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
