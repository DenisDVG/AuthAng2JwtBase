import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate',
      JSON.stringify(credentials)).map(res => {
        // console.log(res.json());
        const result = res.json();
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      });
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    // эта функция есть в библиотеке npm install angular2-jwt --save
    return tokenNotExpired();
    // все что ниже просто описывает как работает ф-ция
    // tokenNotExpired();

    // const jwtHelper = new JwtHelper();
    // const token = localStorage.getItem('token');
    // if (!token) {
    //   return;
    // }
    // const expirationDate = jwtHelper.getTokenExpirationDate(token);
    // const isTokenExpired = jwtHelper.isTokenExpired(token);
    // console.log("expirationDate", expirationDate);
    // console.log("isTokenExpired", isTokenExpired);

    // return !isTokenExpired;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return new JwtHelper().decodeToken(token);
  }
}

