import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private cookieService: CookieService, private loginService: LoginService) {
    
  }
  ngOnInit() {
    this.cookieService.delete("login-id");
    this.cookieService.delete("login-types");
    //this.router.navigate(['/']);
    this.router.navigate(['']);

  }

}
