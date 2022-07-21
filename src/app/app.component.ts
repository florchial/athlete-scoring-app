import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {RoleService} from "./services/role.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'athlete-scoring-app';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.isLogged()
  }


  logout() {
    this.authService.logout()
    window.location.reload()
  }

  isLogged() {
    return this.authService.isAuthenticated()
  }

  user() {
    return this.authService.username()
  }

}
