import {Component, OnInit} from '@angular/core';
import {Competition} from "../../models/competition.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CompetitionService} from "../../services/competition.service";
import {Score} from "../../models/score.model";
import {Athlete} from "../../models/athlete.model";
import {AthletesService} from "../../services/athletes.service";
import {ScoreService} from "../../services/score.service";
import {FinalScore} from "../../models/final-score.model";
import {Style} from "../../models/style.model";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  competition!: Competition;
  athletes = new Map<string, Athlete>();
  scores: FinalScore[] = [];
  displayedColumns: string[] = ["position", "country", "name", "score"];

  constructor(private route: ActivatedRoute, private competitionService: CompetitionService, private athleteService: AthletesService, private scoreService: ScoreService) {
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
              this.scores = data;
            }
          )
        }
      )

    })
  }

  style(competition: Competition): string {
    return Style.toString(competition.style)
  }

}
