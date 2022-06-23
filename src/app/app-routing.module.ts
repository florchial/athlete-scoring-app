import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AthletesListComponent} from "./components/athletes-list/athletes-list.component";
import {AddScoreComponent} from "./components/add-score/add-score.component";
import {CompetitionsListComponent} from "./components/competitions-list/competitions-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'competitions', pathMatch: 'full' },
  { path: 'competitions', component: CompetitionsListComponent },
  { path: 'competitions/:id/athletes', component: AthletesListComponent },
  { path: 'competitions/:id/athletes/:athlete/score', component: AddScoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
