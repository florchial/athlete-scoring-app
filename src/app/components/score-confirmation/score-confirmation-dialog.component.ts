import {Component, Inject, OnInit} from '@angular/core';
import {Athlete} from "../../models/athlete.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-score-confirmation',
  templateUrl: './score-confirmation-dialog.component.html',
  styleUrls: ['./score-confirmation-dialog.component.css']
})
export class ScoreConfirmationDialogComponent implements OnInit {
  athlete!: Athlete;
  performance: number | undefined
  quality: number | undefined

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.athlete = data.athlete
    this.performance = data.performance
    this.quality = data.quality
  }

  ngOnInit(): void {

  }

}
