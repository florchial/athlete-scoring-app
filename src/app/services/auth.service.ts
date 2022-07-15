import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {CookieService} from "ngx-cookie-service";
import {JwtHelperService} from "@auth0/angular-jwt";

const baseUrl = 'http://192.168.0.239:8080/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService, private jwtHelper: JwtHelperService) {
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(baseUrl, {
      "username": username,
      "password": password
    });
  }

  isAuthenticated() {
    return this.cookieService.check('access_token') && !this.jwtHelper.isTokenExpired(this.cookieService.get('access_token'));
  }

}
