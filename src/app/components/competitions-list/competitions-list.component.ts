import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../services/competition.service";
import {Competition} from "../../models/competition.model";
import {Style} from "../../models/style.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-competitions-list',
  templateUrl: './competitions-list.component.html',
  styleUrls: ['./competitions-list.component.css']
})
export class CompetitionsListComponent implements OnInit {
  competitions: Competition[] = [];
  displayedColumns: string[] = ["category", "level", "style", "actions"];

  constructor(private competitionService: CompetitionService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchCompetitions();
  }

  private fetchCompetitions() {
    this.competitionService.getAll().subscribe(
      data => this.competitions = data
    )
  }

  finish(competition: Competition) {
    this.competitionService.finish(competition).subscribe(_ =>
      this.fetchCompetitions()
    )
  }

  start(competition: Competition) {
    this.competitionService.start(competition).subscribe(_ =>
      this.fetchCompetitions()
    )
  }

  style(competition: Competition): string {
    return Style.toString(competition.style)
  }

  score(competition: Competition) {
    this.router.navigate(['/competitions', competition._id, 'athletes'], {state: {competition: competition}})
  }
}
