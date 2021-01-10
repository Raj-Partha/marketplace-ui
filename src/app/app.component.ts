import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loginId:String ;

  title = 'marketplace-ui';
  
  constructor( private cookieService: CookieService) {
    this.loginId = '';
  }

  public updateLoginId(userName :String){
    this.loginId = userName;
  }
  public isLoggedIn(): boolean {
    return this.cookieService.get('storedLCookie').length != 0;
  }
  
}
