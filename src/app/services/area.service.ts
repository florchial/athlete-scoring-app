import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Competition} from "../models/competition.model";
import {CookieService} from "ngx-cookie-service";

const baseUrl = 'http://localhost:8080/api/competitions';
@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }


  getAll(): Observable<string[]> {
    let header = {
      headers: new HttpHeaders()
        .set('authorization',  this.cookieService.get("access_token"))
    }
    return new Observable(subscriber => {
      subscriber.next(['Área 1', "Área 2", "Área 3"])
    })
  }

}
