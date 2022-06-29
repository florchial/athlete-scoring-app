import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AthletesListComponent} from "./components/athletes-list/athletes-list.component";
import {CompetitionsListComponent} from "./components/competitions-list/competitions-list.component";
import {RankingComponent} from "./components/ranking/ranking.component";
import {ScoreDetailComponent} from "./components/score-detail/score-detail.component";

const routes: Routes = [
  { path: '', redirectTo: 'competitions', pathMatch: 'full' },
  { path: 'competitions', component: CompetitionsListComponent },
  { path: 'competitions/:id/athletes', component: AthletesListComponent },
  { path: 'competitions/:id/ranking', component: RankingComponent },
  {path: 'competitions/:id/athletes/:athlete', component: ScoreDetailComponent},
  {path: 'competitions/:id/athletes/:athlete/score', component: ScoreDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
