import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompetitionsListComponent} from './components/competitions-list/competitions-list.component';
import {AddScoreComponent} from './components/add-score/add-score.component';
import {ScoreDetailsComponent} from './components/score-details/score-details.component';
import {AthletesListComponent} from './components/athletes-list/athletes-list.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsListComponent,
    AddScoreComponent,
    ScoreDetailsComponent,
    AthletesListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
