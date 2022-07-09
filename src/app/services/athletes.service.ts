import {Injectable} from '@angular/core';
import {Athlete} from "../models/athlete.model";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

const baseUrl = 'http://192.168.0.239:8080/api/athletes'
@Injectable({
  providedIn: 'root'
})
export class AthletesService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getAll(): Observable<Athlete[]> {
    let header = {
      headers: new HttpHeaders()
        .set('authorization',  this.cookieService.get("access_token"))
    }
    return this.http.get<Athlete[]>(baseUrl, header);
  }

  getById(athleteId: string) :Observable<Athlete> {
    let header = {
      headers: new HttpHeaders()
        .set('authorization',  this.cookieService.get("access_token"))
    }
    return this.http.get<Athlete>(baseUrl + '/' + athleteId, header);
  }
}
