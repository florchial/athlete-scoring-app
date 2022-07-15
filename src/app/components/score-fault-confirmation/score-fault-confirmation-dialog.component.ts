import {Component, Inject, OnInit} from '@angular/core';
import {Athlete} from "../../models/athlete.model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-score-fault-confirmation',
  templateUrl: './score-fault-confirmation-dialog.component.html',
  styleUrls: ['./score-fault-confirmation-dialog.component.css']
})
export class ScoreFaultConfirmationDialogComponent implements OnInit {
  athlete!: Athlete;
  fault: number | undefined

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.athlete = data.athlete
    this.fault = data.fault
  }

  ngOnInit(): void {

  }

}
