import { Injectable } from '@angular/core';
import { Users } from '../login/users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllNodes(): Observable<Users[]> {
    return this.http.get<Users[]>(environment.marketPlaceRESTEndPoint + '/admin/get-all-nodes');
  }

  saveRequest(request: Users) {
    console.log("saving oject ", request)
    return this.http.put<Users>(environment.marketPlaceRESTEndPoint+ '/admin/add-node', request);
  }
}
