import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Athlete} from "../../models/athlete.model";
import {Competition} from "../../models/competition.model";
import {ScoreService} from "../../services/score.service";
import {ScoreConfirmationDialogComponent} from "../score-confirmation/score-confirmation-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  ScoreFaultConfirmationDialogComponent
} from "../score-fault-confirmation/score-fault-confirmation-dialog.component";
import {CookieService} from "ngx-cookie-service";
import {ErrorDialogComponent} from "../error-dialog/error-dialog.component";

@Component({
  selector: 'app-scoring-fault-dialog',
  templateUrl: './scoring-fault-dialog.component.html',
  styleUrls: ['./scoring-fault-dialog.component.css']
})
export class ScoringFaultDialogComponent implements OnInit {
  competition: Competition;
  athlete: Athlete;
  fault: number = 0;
  judge: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private scoreService: ScoreService, public dialog: MatDialog, private snackBar: MatSnackBar, private cookieService: CookieService) {
    this.athlete = data.athlete
    this.competition = data.competition
  }

  ngOnInit(): void {
    if (this.cookieService.get("competition") != this.competition._id) {
      this.cookieService.delete("judge")
      this.cookieService.delete("competition")
      this.judge = ""
    } else {
      this.judge = this.cookieService.get("judge")
    }
  }

  confirm() {
    let confirmationDialog = this.dialog.open(ScoreFaultConfirmationDialogComponent, {
      width: "300px",
      data: {athlete: this.athlete, fault: this.fault}
    });

    confirmationDialog.afterClosed().subscribe((confirmed: Boolean) => {
      if (confirmed) {
        this.scoreService.addFault(this.competition._id, this.athlete._id, this.fault, this.judge).subscribe(
          {
            next: _ => {
              this.snackBar.open('Atleta penalizado correctamente', '', {duration: 3000, panelClass: "ok-snackbar"})
            },
            error: (e) => {
              this.dialog.open(ErrorDialogComponent, {width: "350px", data: {text: 'Error al penalizar competidor. Intente nuevamente.', detail: e.error.message}})
            }
          })
        if (this.needJudgeCode()) {
          this.cookieService.set("judge", this.judge)
          this.cookieService.set("competition", this.competition._id)
        }
      }
    });
  }

  needJudgeCode(): boolean {
    return !this.cookieService.check("judge")
  }


}
