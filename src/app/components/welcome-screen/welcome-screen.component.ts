import {Component, OnInit} from '@angular/core';
import {Area, AreaService} from "../../services/area.service";

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {
  areas: Area[] = [];

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    this.fetchAreas();
  }

  private fetchAreas() {
    this.areaService.getAll().subscribe(
      data => this.areas = data
    )
  }

}
