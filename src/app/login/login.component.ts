import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login.service';
import { Users } from './users';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],


})
export class LoginComponent implements OnInit {

  public loginSelected: Users;
  public loginUser: Users;
  private users: Users[];
  private loggedInuser = new EventEmitter();

  ngOnInit() {

  }

  constructor( private router: Router, private cookieService: CookieService, private loginService: LoginService,
  
  private modalService :NgbModal) {
    this.cookieService.delete("login-id");
    this.cookieService.delete("login-types");
    this.loginService.getAllNodeInfo()
      .subscribe(data => {
        this.users = data;
      });

  }

  public onOptionsSelected(event) {
    this.loginUser = this.users.filter(x => x.id == event)[0];
    console.log(JSON.stringify(this.loginUser)); //option value will be sent as event
  }

  public login() {
    if (this.loginUser) {
      this.cookieService.set("login-id", this.loginUser.shortName)
      this.cookieService.set("login-types", this.loginUser.roles.join())
      this.router.navigate(['/landing-page']);
    }
  }

   open() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.name = 'World';
  }
}
