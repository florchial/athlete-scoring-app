import {Component, OnInit} from '@angular/core';
import {Competition} from "../../models/competition.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CompetitionService} from "../../services/competition.service";
import {ScoreService} from "../../services/score.service";
import {FinalScore} from "../../models/final-score.model";
import {AthletesService} from "../../services/athletes.service";
import {Athlete} from "../../models/athlete.model";
import {Location} from "@angular/common";

@Component({
  selector: 'app-score-detail',
  templateUrl: './ranking-presentation-mode.component.html',
  styleUrls: ['./ranking-presentation-mode.component.css']
})
export class RankingPresentationModeComponent implements OnInit {
  competition!: Competition;
  athletes = new Map<string, Athlete>();
  scores: FinalScore[] = [];

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
              for (let i = 0; i < 5; i++) {
                this.scores.push(data[0])
              }
            }
          )
        }
      )

    })
  }

}
