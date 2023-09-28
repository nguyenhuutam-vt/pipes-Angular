import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}
  apiUrl = 'https://api.npoint.io/d8974e2a83b76da4e84d';
  homeApi():Observable<any>{
    return this.http.get(`${this.apiUrl}`)

  }
}
