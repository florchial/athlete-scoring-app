import {Component, OnInit} from '@angular/core';
import {Area, AreaService} from "../../services/area.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {
  areas: Area[] = [];

  constructor(private areaService: AreaService, private authService: AuthService) { }

  ngOnInit(): void {
    this.fetchAreas();
  }

  private fetchAreas() {
    this.areaService.getAll().subscribe(
      data => this.areas = data
    )
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
