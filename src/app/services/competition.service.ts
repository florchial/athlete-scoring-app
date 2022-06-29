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

}
