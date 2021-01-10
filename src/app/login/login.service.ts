import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Users } from './users';
import { environment } from '../../environments/environment';
import { CommonService } from '../common.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  modalService: any;


  constructor(private http: HttpClient) { }

  getAllNodeInfo() {
    return this.http.get<Users[]>(environment.marketPlaceRESTEndPoint +'/login/get-all-users');
  }
  open() {
    const modalRef = this.modalService.open(LoginService);
    modalRef.componentInstance.name = 'World';
  }
}
