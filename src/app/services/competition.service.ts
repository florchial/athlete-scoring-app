import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Competition} from "../models/competition.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

const baseUrl = 'http://localhost:8080/api/competitions';
@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  getAll(): Observable<Competition[]> {
    let header = {
      headers: new HttpHeaders()
        .set('authorization',  this.cookieService.get("access_token"))
    }
    return this.http.get<Competition[]>(baseUrl, header);
  }

  getById(id: string): Observable<Competition> {
    let header = {
      headers: new HttpHeaders()
        .set('authorization',  this.cookieService.get("access_token"))
    }
    return this.http.get<Competition>(baseUrl + '/' + id, header);
  }

  finish(competition: Competition) {
    let header = {
      headers: new HttpHeaders()
        .set('authorization',  this.cookieService.get("access_token"))
    }
    return this.http.patch<Competition>(baseUrl + '/' + competition._id, {"finished": true}, header);
  }

  start(id: string, judges: number): Observable<Competition> {
    let header = {
      headers: new HttpHeaders()
        .set('authorization',  this.cookieService.get("access_token"))
    }
    //FIXME: remove hardcoding judges_count
    return this.http.patch<Competition>(baseUrl + '/' + id, {"started": true, "judges_count": judges}, header);
  }

}
