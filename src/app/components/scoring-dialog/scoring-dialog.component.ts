import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Athlete} from "../../models/athlete.model";
import {Competition} from "../../models/competition.model";
import {ScoreService} from "../../services/score.service";
import {ScoreConfirmationDialogComponent} from "../score-confirmation/score-confirmation-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-scoring-dialog',
  templateUrl: './scoring-dialog.component.html',
  styleUrls: ['./scoring-dialog.component.css']
})
export class ScoringDialogComponent implements OnInit {
  competition: Competition;
  athlete: Athlete;
  performance: number = 1
  quality: number = 1

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private scoreService: ScoreService, public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.athlete = data.athlete
    this.competition = data.competition
  }

  ngOnInit(): void {
  }

  confirm() {
    let confirmationDialog = this.dialog.open(ScoreConfirmationDialogComponent, {
      width: "300px",
      data: {athlete: this.athlete, performance: this.performance, quality: this.quality}
    });

    confirmationDialog.afterClosed().subscribe((confirmed: Boolean) => {
      if (confirmed) {
        this.scoreService.addScore(this.competition._id, this.athlete._id, this.performance, this.quality).subscribe(_ =>
            this.snackBar.open('Atleta calificado con éxito', '', {duration: 3000})
        )
      }
    });
  }

}
