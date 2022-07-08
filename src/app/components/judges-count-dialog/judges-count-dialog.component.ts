import {Component, Inject, OnInit} from '@angular/core';
import {CompetitionService} from "../../services/competition.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

class MdDialogRef<T> {
}

@Component({
  selector: 'app-judges-count-dialog',
  templateUrl: './judges-count-dialog.component.html',
  styleUrls: ['./judges-count-dialog.component.css']
})
export class JudgesCountDialogComponent implements OnInit {
  judges: number = 0;

  constructor(private competitionService: CompetitionService, private dialogRef: MatDialogRef<JudgesCountDialogComponent>) {
  }

  ngOnInit(): void {
  }

  confirm() {
    this.dialogRef.close({data: this.judges})
  }
}
