import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Competition} from "../models/competition.model";
import {HttpClient} from "@angular/common/http";

const baseUrl = 'http://localhost:8080/api/competitions';
@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Competition[]> {
    return this.http.get<Competition[]>(baseUrl);
  }

  getById(id: string): Observable<Competition> {
    return this.http.get<Competition>(baseUrl + '/' + id);
  }

  finish(competition: Competition) {
    return this.http.patch<Competition>(baseUrl + '/' + competition._id, {"started": false});
  }

  start(competition: Competition): Observable<Competition> {
    return this.http.patch<Competition>(baseUrl + '/' + competition._id, {"started": true});
  }

/*



  getScores(id: string): Observable<Score[]> {
    return new Observable(subscriber => {
      let scoresAndAthletes = this.scores
        .filter(s => s.competitionId === id)
        .map(s => {
          let athlete: Athlete | undefined = this.athletes.find(a => a.id === s.athleteId)
          s.athlete = athlete
          return s
        });
      subscriber.next(scoresAndAthletes)
    })
  }

  getScore(id: string, athleteId: string): Observable<Score> {
    return new Observable(subscriber => {
      this.getScores(id).subscribe(data => {
          let sorted = data
            .sort((a: Score, b: Score) => a.score < b.score ? 1 : a.score > b.score ? -1 : 0)
          let score = sorted.find(s => s.athleteId == athleteId);
          score!.position = sorted.indexOf(score!) + 1
          subscriber.next(score)
        }
      )
    })
  }*/
}
