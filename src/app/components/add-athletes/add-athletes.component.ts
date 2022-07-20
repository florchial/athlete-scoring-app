import {Component, OnInit} from '@angular/core';
import {Athlete} from "../../models/athlete.model";
import {Competition} from "../../models/competition.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CompetitionService} from "../../services/competition.service";
import {AthletesService} from "../../services/athletes.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-athletes',
  templateUrl: './add-athletes.component.html',
  styleUrls: ['./add-athletes.component.css']
})
export class AddAthletesComponent implements OnInit {
  allAthletes: Athlete[] = [];
  competitionAthletes: Athlete[] = [];
  competition!: Competition;

  constructor(private route: ActivatedRoute, private competitionService: CompetitionService,
              private athleteService: AthletesService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.fetchAthletes(params);
    })
  }

  private fetchAthletes(params: ParamMap) {
    this.competitionService.getById(params.get('id')!!).subscribe(
      data => {
        this.competition = data;
        this.athleteService.getAll().subscribe(
          data => {
            this.allAthletes = data.filter(athlete => !this.competition.competitors.includes(athlete._id)).sort((a, b) => AddAthletesComponent.orderByName(a, b))
            this.competitionAthletes = data.filter(athlete => this.competition.competitors.includes(athlete._id)).sort((a, b) => AddAthletesComponent.orderByName(a, b))
          })
      })
  }

  private static orderByName(a: Athlete, b: Athlete) {
    return a.name.localeCompare(b.name)
  }

  addAthletes() {
    this.competitionService.addAthletes(this.competition._id,this.competitionAthletes.map(a => a._id)).subscribe(_ => {
      this.snackBar.open('Competidores agregados con éxito', '', {duration: 5000, panelClass: "ok-snackbar"})
    })
  }

  drop(event: CdkDragDrop<Athlete[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
