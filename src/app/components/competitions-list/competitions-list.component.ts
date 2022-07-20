import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../services/competition.service";
import {Competition} from "../../models/competition.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {JudgesCountDialogComponent} from "../judges-count-dialog/judges-count-dialog.component";
import {RoleService} from "../../services/role.service";

@Component({
  selector: 'app-competitions-list',
  templateUrl: './competitions-list.component.html',
  styleUrls: ['./competitions-list.component.css']
})
export class CompetitionsListComponent implements OnInit {
  competitions: Competition[] = [];
  displayedColumns: string[] = ["category", "level", "style", "actions"];
  area: string = ""
  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private competitionService: CompetitionService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog, public roleService: RoleService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.area = params.get('area')!!
      this.fetchCompetitionsByArea(this.area)
    })
  }

  private fetchCompetitionsByArea(area: string) {
    this.competitionService.findByArea(area).subscribe({
      next: data => {
        this.competitions = data
        this.isLoading = false
        this.isError = false
      },
      error: () => {
        this.isLoading = false
        this.isError = true
      }
    })
  }

  finish(competition: Competition) {
    this.competitionService.finish(competition).subscribe(_ =>
      this.fetchCompetitionsByArea(this.area)
    )
  }

  start(competition: Competition) {
    let confirmationDialog = this.dialog.open(JudgesCountDialogComponent, {
      width: "300px",
      data: {competitionId: competition._id}
    });

    confirmationDialog.afterClosed().subscribe((judges: any) => {
      if (judges.data >= 3) {
        this.competitionService.start(competition._id, judges.data).subscribe(_ => {
          this.fetchCompetitionsByArea(this.area)
        })
      }
    });

  }


  score(competition: Competition) {
    this.router.navigate(['/competitions', competition._id, 'athletes'], {state: {competition: competition}})
  }

  ranking(id: string) {
    this.router.navigate(['/competitions', id, 'ranking'])
  }

  refresh() {
    window.location.reload();
  }

}
