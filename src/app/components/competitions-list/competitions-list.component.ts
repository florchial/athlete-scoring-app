import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../services/competition.service";
import {Competition} from "../../models/competition.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-competitions-list',
  templateUrl: './competitions-list.component.html',
  styleUrls: ['./competitions-list.component.css']
})
export class CompetitionsListComponent implements OnInit {
  competitions: Competition[] = [];
  displayedColumns: string[] = ["category", "level", "style", "actions"];
  area: string = ""

  constructor(private competitionService: CompetitionService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.area = params.get('area')!!
      this.fetchCompetitionsByArea(this.area)
    })
  }

  private fetchCompetitionsByArea(area: string) {
    this.competitionService.getAll().subscribe(
      data => this.competitions = data.filter(c => c.area === area)
    )
  }

  finish(competition: Competition) {
    this.competitionService.finish(competition).subscribe(_ =>
      this.fetchCompetitionsByArea(this.area)
    )
  }

  start(competition: Competition) {
    this.competitionService.start(competition).subscribe(_ =>
      this.fetchCompetitionsByArea(this.area)
    )
  }


  score(competition: Competition) {
    this.router.navigate(['/competitions', competition._id, 'athletes'], {state: {competition: competition}})
  }

}
