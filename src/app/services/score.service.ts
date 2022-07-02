import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Score} from "../models/score.model";
import {FinalScore} from "../models/final-score.model";
import {round} from "@popperjs/core/lib/utils/math";

const baseUrl = 'http://192.168.0.239:8080/api/competitions';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient) {
  }

  addScore(competitionId: string, athleteId: string, performance: number, quality: number): Observable<Score> {
    return this.http.post<Score>(baseUrl + '/' + competitionId + '/athletes/' + athleteId + '/scores', {
      "performance": performance,
      "quality": quality,
      "judge": "athlete-scoring-app-" + Date.now().toString()
    });
  }

  getRankingByCompetition(competitionId: string): Observable<FinalScore[]> {
    return new Observable(subscriber => {
      this.http.get<FinalScore[]>(baseUrl + '/' + competitionId + '/ranking').subscribe(
        data => {
          data.sort((a, b) => a.final < b.final ? 1 : a.final > b.final ? -1 : 0);
          subscriber.next(data);
        })
    })
  }
}
