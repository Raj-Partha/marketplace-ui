import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestListComponent } from './request-list/request-list.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { RequestViewComponent } from './request-view/request-view.component';
import { TransactionComponent } from './transaction/transaction.component';


const routes: Routes = [

  {path: 'request/list', component: RequestListComponent},
  {path: 'request/create', component: CreateRequestComponent},
  {path: 'request/transactions', component: TransactionComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
