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
  competition: Competition = new Competition("1", "Adulto I", "Puño - Forma 16", "ALL", true, [], "");
  score: FinalScore = new FinalScore("8.75", "1", "4.25", "4.50");
  athlete: Athlete = new Athlete("1", "María Agustina Russel", "Argentina", "AR");
  position: number = 10

  constructor(private route: ActivatedRoute, private competitionService: CompetitionService, private scoreService: ScoreService, private athleteService: AthletesService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let competitionId = params.get('id')!!;
      let athleteId = params.get(('athlete'))!!;
      this.competitionService.getById(competitionId).subscribe(
        data => {
          this.competition = new Competition("1", "Adulto I", "Puño - Forma 16", "ALL", true, [], "");
        }
      )

      this.scoreService.getRankingByCompetition(competitionId).subscribe(
        data => {
          this.score = new FinalScore("8.75", "1", "4.25", "4.50")//data.find(s => s.athlete === athleteId);
          this.position = 2//data.indexOf(this.score!)
        }
      )
      this.athleteService.getById(athleteId).subscribe(
        data => {
          this.athlete = new Athlete("1", "María Agustina Russel", "Argentina", "AR")//data
        }
      )
    })
  }

}
