import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CompetitionService} from "../../services/competition.service";
import {Competition} from "../../models/competition.model";
import {Athlete} from "../../models/athlete.model";
import {MatDialog} from "@angular/material/dialog";
import {ScoringDialogComponent} from "../scoring-dialog/scoring-dialog.component";
import {AthletesService} from "../../services/athletes.service";
import {Location} from "@angular/common";
import {ScoringFaultDialogComponent} from "../scoring-fault-dialog/scoring-fault-dialog.component";
import {CookieService} from "ngx-cookie-service";
import {RoleService} from "../../services/role.service";

@Component({
  selector: 'app-athletes-list',
  templateUrl: './athletes-list.component.html',
  styleUrls: ['./athletes-list.component.css']
})
export class AthletesListComponent implements OnInit {
  competition!: Competition;
  athletes: Athlete[] = [];


  displayedColumns: string[] = ["id", "country", "name", "actions"];
  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private route: ActivatedRoute,
              private competitionService: CompetitionService,
              private athleteService: AthletesService,
              public dialog: MatDialog,
              private _location: Location,
              private router: Router, private cookieService: CookieService, private roleService: RoleService) {
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.competitionService.getById(params.get('id')!!).subscribe(
        data => {
          this.competition = data;
          this.athleteService.getAll().subscribe({
            next: data => {
              this.athletes = data.filter(athlete => this.competition.competitors.includes(athlete._id))
              this.isLoading = false
              this.isError = true
            },
            error: () => {
              this.isLoading = false
              this.isError = true
            }
          })
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

  fault(athlete: Athlete) {
    this.dialog.open(ScoringFaultDialogComponent, {
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

  alreadyScored(athleteId: string): boolean {
    return this.cookieService.check(this.competition._id + "-" + athleteId)
  }

  isJudge(): boolean {
    return this.roleService.moderator()
  }
}
