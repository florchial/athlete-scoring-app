import {Injectable} from '@angular/core';
import {Athlete} from "../models/athlete.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const baseUrl = 'http://192.168.0.239:8080/api/athletes'
@Injectable({
  providedIn: 'root'
})
export class AthletesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Athlete[]> {
    return this.http.get<Athlete[]>(baseUrl);
  }

  getById(athleteId: string) :Observable<Athlete> {
    return this.http.get<Athlete>(baseUrl + '/' + athleteId);
  }
}
