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

@Component({
  selector: 'app-scoring-fault-dialog',
  templateUrl: './scoring-fault-dialog.component.html',
  styleUrls: ['./scoring-fault-dialog.component.css']
})
export class ScoringFaultDialogComponent implements OnInit {
  competition: Competition;
  athlete: Athlete;
  fault: number = 0

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private scoreService: ScoreService, public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.athlete = data.athlete
    this.competition = data.competition
  }

  ngOnInit(): void {
  }

  confirm() {
    let confirmationDialog = this.dialog.open(ScoreFaultConfirmationDialogComponent, {
      width: "300px",
      data: {athlete: this.athlete, fault: this.fault}
    });

    confirmationDialog.afterClosed().subscribe((confirmed: Boolean) => {
      if (confirmed) {
        this.scoreService.addFault(this.competition._id, this.athlete._id, this.fault, "").subscribe(_ =>
            this.snackBar.open('Atleta penalizado', '', {duration: 3000})
        )
      }
    });
  }


}
