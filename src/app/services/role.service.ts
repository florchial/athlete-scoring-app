import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import decode from 'jwt-decode';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class RoleService {
  constructor(public auth: AuthService, public cookiesService: CookieService, public router: Router) {
  }

  maintainer(): boolean {
    return this.hasRole('maintainer')
  }
  admin(): boolean {
    return this.hasRole('admin')
  }

  judge(): boolean {
    return this.hasRole('judge')
  }

  headJudge(): boolean {
    return this.hasRole('head_judge')
  }

  hasRole(role: string): boolean {
    const token = this.cookiesService.get('access_token');
    const tokenPayload = decode<User>(token);
    return !this.auth.isAuthenticated() || tokenPayload.roles.includes(role)
  }
}


interface User {
  roles: string[]
}
