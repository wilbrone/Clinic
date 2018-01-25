import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppConst} from '../../constants/app-const';
import {Router} from '@angular/router';
@Injectable()
export class LoginService {
  private serverPath:string = AppConst.serverPath;

  constructor(private http:Http, private router:Router) { }

  getToken(credentials) {
    let url = this.serverPath+'/api-auth/';
    let headers = new Headers({
      'Content-Type' : 'application/json',
    });

    this.http.post(url, credentials, {headers: headers})
      .map(res => res.json())
        .subscribe(
          data => localStorage.setItem('token', data.token),

          error => console.log(error)
        );



  }

  // checkSession() {
  //   return tokenNotExpired();
  // }



  // checkSession() {
  //   let url = this.serverPath+'/checkSession';
  //   let headers = new Headers({
  //     'x-auth-token' : localStorage.getItem('xAuthToken')
  //   });

  //   return this.http.get(url, {headers: headers});
  // }

  logout() {
    localStorage.removeItem('token'); 
  }

}