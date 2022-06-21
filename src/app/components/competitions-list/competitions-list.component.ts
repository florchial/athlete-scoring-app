import { Component, OnInit } from '@angular/core';
import {CompetitionsService} from "../../services/competitions.service";
import {Competition} from "../../models/competition.model";

@Component({
  selector: 'app-competitions-list',
  templateUrl: './competitions-list.component.html',
  styleUrls: ['./competitions-list.component.css']
})
export class CompetitionsListComponent implements OnInit {
  competitions: Competition[] = [];

  constructor(private competitionService: CompetitionsService) { }

  ngOnInit(): void {
    this.competitionService.getAll().subscribe(
      data => this.competitions = data
    )
  }

}
