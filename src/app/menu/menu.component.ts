import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login/login.service';
import { LoginComponent } from '../login/login.component';
import { Users } from '../login/users';
import { MenuService } from './menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private loggedIn: boolean;
  private users: Users[];
  private selectedMenu = [];
  private loginUser: Users;
  private selectedUser: Users;
  private loggedInUserName ='';
  menu = [
    {
      'name': 'Administration', 'link': 'Admin', 'menu-type': 'Admin', 'subMenuPresent':true,
      'subMenus': [{ 'name': 'View Registered Nodes', 'link': 'admin/view-nodes' }]
    },
    {
      'name': 'Lend', 'link': 'landing-page', 'menu-type': 'Lender',  'subMenuPresent':true,
      'subMenus': [{ 'name': 'Offer List', 'link': 'offer/list' },
      { 'name': 'Create Offer', 'link': 'offer/create' },
      { 'name': 'Pending Approvals', 'link': 'offer/pendingapprovals' },
      { 'name': 'Transactions', 'link': 'offer/transactions' }
      ]
    },
    {
      'name': 'Borrow', 'link': 'landing-page', 'menu-type': 'Borrower',  'subMenuPresent':true,
      'subMenus': [{ 'name': 'Request List', 'link': 'request/list' },
      { 'name': 'Create Request', 'link': 'request/create' },
      { 'name': 'Transactions', 'link': 'request/transactions'}
      ]
    },
    { 'name': 'Features', 'link': 'default', 'menu-type': 'None', 'subMenuPresent':false },
    { 'name': 'Enterprise', 'link': 'default', 'menu-type': 'None' ,'subMenuPresent':false},
    { 'name': 'Support', 'link': 'default', 'menu-type': 'None' ,'subMenuPresent':false},
    { 'name': 'Pricing', 'link': 'default', 'menu-type': 'None' ,'subMenuPresent':false}
  ];


  constructor(private router: Router, private cookieService: CookieService, private menuService: MenuService) {
    this.loggedInUserName=this.cookieService.get("login-id");
    this.menuService.getAllNodeInfo().toPromise().then(data => {
      this.users = data;
    });
    this.getMenu();

  }

  ngOnInit() {
  }

  isLoggedCheckFromCookie() {
    return this.cookieService.get("login-id");
  }
  public getMenu() {
    console.log("calling getMenu ----------------")

    const menu: any[] = [];

    while (this.selectedMenu.length > 0) {
      this.selectedMenu.pop();
    }

    var rolesForUser = this.cookieService.get('login-types').split(",");
    const filteredResults: any[] = [];
    const userName = this.cookieService.get("login-id")
    rolesForUser.forEach(it => {
      this.menu.forEach(result => {
        if (result["menu-type"] == it || !userName && result["menu-type"] == 'None') {
          this.selectedMenu.push(result);
        }
      })
    });
    
    if(!userName){
      this.selectedMenu.push();
    }
    console.log("completed getMenu ----------------")
  }

  

  public onOptionsSelected(event) {
    this.selectedUser = this.users.filter(x => x.id == event)[0];
    console.log("dfafa " + JSON.stringify(this.selectedUser)); //option value will be sent as event
  }
  public logout() {
    this.cookieService.delete("login-id")
    this.cookieService.delete("login-types")
    this.router.navigate(['']);
    this.loggedIn = false;
    this.selectedUser = null;
    this.loginUser = null;
    this.loggedInUserName ='';
    this.getMenu();

  }
  public login() {
    if (!this.loggedIn && this.selectedUser) {
      this.loginUser = this.selectedUser;
      this.loggedInUserName = this.loginUser.shortName;
      this.cookieService.set("login-id", this.loginUser.shortName)
      this.cookieService.set("login-types", this.loginUser.roles.join())
      this.loggedIn = true;
      this.router.navigate(['/landing-page']);
      this.getMenu();


    }
  }

}
