import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Score} from "../models/score.model";
import {FinalScore} from "../models/final-score.model";
import {CookieService} from "ngx-cookie-service";
import {environment} from "../../environments/environment.prod";

const baseUrl =  environment.baseUrl + '/competitions';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  addScore(competitionId: string, athleteId: string, performance: number, quality: number, judge: string): Observable<Score> {
    let header = {
      headers: new HttpHeaders()
        .set('authorization', this.cookieService.get("access_token"))
    }
    return this.http.post<Score>(baseUrl + '/' + competitionId + '/athletes/' + athleteId + '/scores', {
      "performance": performance,
      "quality": quality,
      "judge": judge
    }, header);
  }

  getRankingByCompetition(competitionId: string): Observable<FinalScore[]> {
    let header = {
      headers: new HttpHeaders()
        .set('authorization', this.cookieService.get("access_token"))
    }
    return new Observable(subscriber => {
      this.http.get<FinalScore[]>(baseUrl + '/' + competitionId + '/ranking', header).subscribe(
        data => {
          data.forEach(score => {
            if(score.revisions.some(r => r.type == "FAULT")) {
              score.final = score.final - score.revisions.find(r => r.type == "FAULT")!.value
            }
          })
          data.sort((a, b) => a.final < b.final ? 1 : a.final > b.final ? -1 : 0);
          subscriber.next(data);
        })
    })
  }

  addFault(competitionId: string, athleteId: string, fault: number, judge: string): Observable<any> {
    let header = {
      headers: new HttpHeaders()
        .set('authorization', this.cookieService.get("access_token"))
    }
    return this.http.post<any>(baseUrl + '/' + competitionId + '/athletes/' + athleteId + '/revisions', {
      "value": fault,
      "judge": judge
    }, header);
  }
}
