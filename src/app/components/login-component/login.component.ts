import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  isLoading: boolean = false;

  constructor(private loginService: AuthService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {

  }

  login() {
    this.isLoading = true
    this.loginService.login(this.username, this.password).subscribe({
      next: data => {
        this.cookieService.set("access_token", data.token)
        this.isLoading = false
        this.router.navigate(['areas'])
      },
      error: () => {
        this.isLoading = false
      }
    })
  }
}
