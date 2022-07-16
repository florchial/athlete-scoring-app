import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AthletesListComponent} from "./components/athletes-list/athletes-list.component";
import {CompetitionsListComponent} from "./components/competitions-list/competitions-list.component";
import {RankingComponent} from "./components/ranking/ranking.component";
import {ScoreDetailComponent} from "./components/score-detail/score-detail.component";
import {WelcomeScreenComponent} from "./components/welcome-screen/welcome-screen.component";
import {LoginComponent} from "./components/login-component/login.component";
import {AuthGuardService as AuthGuard} from "./services/auth-guard.service";
import {
  ScoreDetailPresentationModeComponent
} from "./components/score-detail-presentation-mode/score-detail-presentation-mode.component";
import {
  RankingPresentationModeComponent
} from "./components/ranking-presentation-mode/ranking-presentation-mode.component";

const routes: Routes = [
  { path: '', redirectTo: 'areas', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'areas', component: WelcomeScreenComponent, canActivate: [AuthGuard] },
  { path: 'areas/:area/competitions', component: CompetitionsListComponent, canActivate: [AuthGuard]  },
  { path: 'competitions/:id/athletes', component: AthletesListComponent, canActivate: [AuthGuard]  },
  { path: 'competitions/:id/ranking', component: RankingPresentationModeComponent, canActivate: [AuthGuard]  },
  {path: 'competitions/:id/athletes/:athlete/score', component: ScoreDetailPresentationModeComponent, canActivate: [AuthGuard] },
  {path: 'competitions/:id/athletes/:athlete/score/presentation-mode', component: ScoreDetailPresentationModeComponent, canActivate: [AuthGuard] },
  {path: 'competitions/:id/ranking/presentation-mode', component: RankingPresentationModeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
