import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {

  constructor(private http: AuthHttp) {
  }

  getOrders() {

    // !!! заменив класс http: Http на класс из библиотети angular2-jwt
    // http: AuthHttp код закомментированный ниже можно не писать
    // токен будет добавляться в каждый запрос автоматически примерно
    // так как показано ниже в закомментированном коде
    // const headers = new Headers();
    // const token = localStorage.getItem('token');
    // headers.append('Authorization', 'Bearer ' + token);
    // const options = new RequestOptions({headers: headers});
    // return this.http.get('/api/orders', options)
    // .map(response => response.json());

    return this.http.get('/api/orders')
      .map(response => response.json());
  }
}
