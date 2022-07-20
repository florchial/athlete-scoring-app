import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompetitionsListComponent} from './components/competitions-list/competitions-list.component';
import {ScoreDetailComponent} from './components/score-detail/score-detail.component';
import {AthletesListComponent} from './components/athletes-list/athletes-list.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from '@angular/router';
import {RankingComponent} from './components/ranking/ranking.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ScoreConfirmationDialogComponent} from './components/score-confirmation/score-confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatListModule} from "@angular/material/list";
import {ScoringDialogComponent} from './components/scoring-dialog/scoring-dialog.component';
import {MatCardModule} from "@angular/material/card";
import {WelcomeScreenComponent} from './components/welcome-screen/welcome-screen.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {JudgesCountDialogComponent} from './components/judges-count-dialog/judges-count-dialog.component';
import {LoginComponent} from './components/login-component/login.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {ScoringFaultDialogComponent} from "./components/scoring-fault-dialog/scoring-fault-dialog.component";
import {
  ScoreFaultConfirmationDialogComponent
} from "./components/score-fault-confirmation/score-fault-confirmation-dialog.component";
import {
  ScoreDetailPresentationModeComponent
} from "./components/score-detail-presentation-mode/score-detail-presentation-mode.component";
import {
  RankingPresentationModeComponent
} from "./components/ranking-presentation-mode/ranking-presentation-mode.component";
import {RoleService} from "./services/role.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CompetitionsListComponent,
    ScoreDetailComponent,
    AthletesListComponent,
    RankingComponent,
    ScoreConfirmationDialogComponent,
    ScoringDialogComponent,
    WelcomeScreenComponent,
    JudgesCountDialogComponent,
    LoginComponent,
    ScoringFaultDialogComponent,
    ScoreFaultConfirmationDialogComponent,
    ScoreDetailPresentationModeComponent,
    RankingPresentationModeComponent,
    ErrorDialogComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule,
    HttpClientModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  providers: [JwtHelperService,  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, RoleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
