import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestclientServiceService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post('http://localhost:8080/login', null, {
      headers: headers,
      params: params,
      withCredentials: true
    });
  }

  getTestData() {
    return this.http.post('http://localhost:8080/api/test', '', {
      withCredentials: true
    });
  }

  getRestrictedData() {
    return this.http.post('http://localhost:8080/api/restricted-method', '', {
      withCredentials: true
    });
  }

  logout() {
    return this.http.post('http://localhost:8080/logout', '', {
      withCredentials: true
    });
  }
}
