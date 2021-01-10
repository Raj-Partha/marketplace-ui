import { Injectable } from '@angular/core';
import { MenuComponent } from './menu.component';
import { LoginComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';
import { Users } from '../login/users';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MenuService {


  constructor(private http: HttpClient) { }

  getAllNodeInfo() {
    return this.http.get<Users[]>(environment.marketPlaceRESTEndPoint +'/login/get-all-users');
  }
}
