import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestListComponent } from './request/request-list/request-list.component';
import { CreateRequestComponent } from './request/create-request/create-request.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ViewNodesComponent } from './admin/view-nodes/view-nodes.component';
import { LogoutComponent } from './logout/logout.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  { path: '', component:DefaultComponent },
  { path: 'default', component: DefaultComponent },
  { path: 'login', component: LoginComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'admin/view-nodes', component: ViewNodesComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
