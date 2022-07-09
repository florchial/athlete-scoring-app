import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Score} from "../models/score.model";
import {FinalScore} from "../models/final-score.model";
import {CookieService} from "ngx-cookie-service";

const baseUrl = 'http://192.168.0.239:8080/api/competitions';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  addScore(competitionId: string, athleteId: string, performance: number, quality: number): Observable<Score> {
    let header = {
      headers: new HttpHeaders()
        .set('authorization',  this.cookieService.get("access_token"))
    }
    return this.http.post<Score>(baseUrl + '/' + competitionId + '/athletes/' + athleteId + '/scores', {
      "performance": performance,
      "quality": quality,
      "judge": "athlete-scoring-app-" + Date.now().toString()
    }, header);
  }

  getRankingByCompetition(competitionId: string): Observable<FinalScore[]> {
    let header = {
      headers: new HttpHeaders()
        .set('authorization',  this.cookieService.get("access_token"))
    }
    return new Observable(subscriber => {
      this.http.get<FinalScore[]>(baseUrl + '/' + competitionId + '/ranking', header).subscribe(
        data => {
          data.sort((a, b) => a.final < b.final ? 1 : a.final > b.final ? -1 : 0);
          subscriber.next(data);
        })
    })
  }
}
