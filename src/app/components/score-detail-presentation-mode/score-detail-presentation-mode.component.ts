import {Component, OnInit} from '@angular/core';
import {Competition} from "../../models/competition.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CompetitionService} from "../../services/competition.service";
import {ScoreService} from "../../services/score.service";
import {FinalScore} from "../../models/final-score.model";
import {AthletesService} from "../../services/athletes.service";
import {Athlete} from "../../models/athlete.model";
import {Score} from "../../models/score.model";

@Component({
  selector: 'app-score-detail',
  templateUrl: './score-detail-presentation-mode.component.html',
  styleUrls: ['./score-detail-presentation-mode.component.css']
})
export class ScoreDetailPresentationModeComponent implements OnInit {
  competition!: Competition;
  score: FinalScore | undefined;
  athlete!: Athlete;
  position: number = 0

  constructor(private route: ActivatedRoute, private competitionService: CompetitionService, private scoreService: ScoreService, private athleteService: AthletesService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let competitionId = params.get('id')!!;
      let athleteId = params.get(('athlete'))!!;
      this.competitionService.getById(competitionId).subscribe(
        data => {
          this.competition = data;
        }
      )

      this.scoreService.getRankingByCompetition(competitionId).subscribe(
        data => {
          this.score = data.find(s => s.athlete === athleteId);
          this.position = data.indexOf(this.score!)+1
        }
      )
      this.athleteService.getById(athleteId).subscribe(
        data => {
          this.athlete = data
        }
      )
    })
  }

  wrapName(name: string){
    if(name.length > 28) {
      return name.substring(0, 28) + "..."
    } else {
      return name
    }
  }

}
