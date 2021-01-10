import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestModule } from './request/request.module';
import { OfferModule } from './offer/offer.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import {SelectModule} from "ng2-select";
import { AdminComponent } from './admin/admin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ViewNodesComponent } from './admin/view-nodes/view-nodes.component';
import { LogoutComponent } from './logout/logout.component';
import {AgGridModule} from "ag-grid-angular/main";
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';

import { HttpModule } from '@angular/http'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { DefaultComponent } from './default/default.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatDialog } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    LandingPageComponent,
    ViewNodesComponent,
    LogoutComponent,
    MenuComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RequestModule,
    OfferModule,
    SelectModule,
    BrowserAnimationsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  providers: [LoginComponent,MenuComponent, CookieService,MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
