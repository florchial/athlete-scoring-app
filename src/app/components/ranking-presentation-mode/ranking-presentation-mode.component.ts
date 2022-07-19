import {Component, OnInit} from '@angular/core';
import {Competition} from "../../models/competition.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CompetitionService} from "../../services/competition.service";
import {ScoreService} from "../../services/score.service";
import {FinalScore} from "../../models/final-score.model";
import {AthletesService} from "../../services/athletes.service";
import {Athlete} from "../../models/athlete.model";
import {Location} from "@angular/common";
import {Observable, timer} from "rxjs";

@Component({
  selector: 'app-score-detail',
  templateUrl: './ranking-presentation-mode.component.html',
  styleUrls: ['./ranking-presentation-mode.component.css']
})
export class RankingPresentationModeComponent implements OnInit {
  competition!: Competition;
  athletes = new Map<string, Athlete>();
  scores: FinalScore[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  athletesPerPage: number = 5;
  everyTenSeconds: Observable<number> = timer(0, 10000);

  constructor(private route: ActivatedRoute,
              private competitionService: CompetitionService,
              private athleteService: AthletesService,
              private scoreService: ScoreService,
              private _location: Location) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let competitionId = params.get('id')!!;
      this.competitionService.getById(competitionId).subscribe(
        data => {
          this.competition = data;
        }
      )
      this.athleteService.getAll().subscribe(
        data => {
          data.forEach(a => this.athletes.set(a._id, a))
          this.scoreService.getRankingByCompetition(competitionId).subscribe(data => {
            this.everyTenSeconds.subscribe(() => {
                this.totalPages = Math.ceil(data.length / this.athletesPerPage)
                this.scores = data.slice((this.currentPage * this.athletesPerPage) - this.athletesPerPage, (this.currentPage * this.athletesPerPage))
                this.scores.forEach(score => score.position = this.scores.indexOf(score)+1+((this.currentPage-1)*this.athletesPerPage))
                this.currentPage++;
                if (this.currentPage > this.totalPages) {
                  this.currentPage = 1
                }
              }
            )
          })
        }
      )

    })
  }

  wrapName(name: string) {
    if (name.length > 28) {
      return name.substring(0, 28) + "..."
    } else {
      return name
    }
  }

  scoreType(score: FinalScore) {
    return score.count < this.competition.judges_count ? "PUNTAJE PARCIAL" : ""
  }
}
