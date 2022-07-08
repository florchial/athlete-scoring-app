import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CompetitionService} from "../../services/competition.service";
import {Competition} from "../../models/competition.model";
import {Athlete} from "../../models/athlete.model";
import {MatDialog} from "@angular/material/dialog";
import {ScoringDialogComponent} from "../scoring-dialog/scoring-dialog.component";
import {AthletesService} from "../../services/athletes.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-athletes-list',
  templateUrl: './athletes-list.component.html',
  styleUrls: ['./athletes-list.component.css']
})
export class AthletesListComponent implements OnInit {
  competition!: Competition;
  athletes: Athlete[] = [];


  displayedColumns: string[] = ["id", "country", "name", "actions"];

  constructor(private route: ActivatedRoute,
              private competitionService: CompetitionService,
              private athleteService: AthletesService,
              public dialog: MatDialog,
              private _location: Location,
              private router: Router) {
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.competitionService.getById(params.get('id')!!).subscribe(
        data => {
          this.competition = data;
          this.athleteService.getAll().subscribe(
            data => {
              this.athletes = data.filter(athlete => this.competition.competitors.includes(athlete._id))
            }
          )
        }
      )
    })
  }

  score(athlete: Athlete) {
    this.dialog.open(ScoringDialogComponent, {
      width: '250px',
      data: {athlete: athlete, competition: this.competition}
    });
  }

  back() {
    this._location.back()
  }

  ranking() {
    this.router.navigate(['/competitions', this.competition._id, 'ranking'])
  }
}
