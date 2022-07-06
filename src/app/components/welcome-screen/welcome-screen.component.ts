import { Component, OnInit } from '@angular/core';
import {Competition} from "../../models/competition.model";
import {CompetitionService} from "../../services/competition.service";
import {Router} from "@angular/router";
import {AreaService} from "../../services/area.service";

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {
  areas: string[] = [];

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
